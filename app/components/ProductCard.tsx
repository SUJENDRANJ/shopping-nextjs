'use client';

import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="mt-2 text-lg font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}