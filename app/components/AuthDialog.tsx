"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { LogOut, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { ModeToggle } from "./ToggleTheme";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function AuthDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const { toast } = useToast();
  const { user, login, signup, logout } = useAuth();
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (mode === "login") {
        await login(values.email, values.password);
        toast({
          title: "Success",
          description: "You have been logged in successfully.",
        });
      } else {
        await signup(values.email, values.password);
        toast({
          title: "Success",
          description: "Account created successfully.",
        });
      }
      setIsOpen(false);
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    }
  }

  // Show user info after login (for both GitHub and normal login)
  if (user || session?.user) {
    const loggedInUser = user || session?.user;

    return (
      <div className="flex items-center gap-3 p-2 border rounded-lg shadow-sm">
        {/* Profile Image (Only for GitHub users) */}

        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full border border-gray-300"
          />
        )}
        {/* User Info */}
        <div className="flex flex-col">
          <span className="text-sm font-medium">
            {(loggedInUser as any)?.name || loggedInUser?.email}
          </span>
          {/* {loggedInUser?.email && (
            <span className="text-xs text-gray-500">{loggedInUser.email}</span>
          )} */}
        </div>
        {/* Logout Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => (session ? signOut() : logout())}
          className="ml-auto"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode === "login" ? "Login" : "Sign Up"}</DialogTitle>
          <DialogDescription>
            {mode === "login"
              ? "Enter your credentials to access your account"
              : "Create a new account to get started"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2">
              <Button type="submit" className="bg-blue-500 hover:bg-blue-400">
                {mode === "login" ? "Login" : "Sign Up"}
              </Button>
              <p className="text-center">--------- or ---------</p>
              <Button type="button" onClick={() => signIn("github")}>
                Continue with Github
              </Button>

              <Button
                type="button"
                variant="ghost"
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
              >
                {mode === "login"
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Login"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
