import { useParams } from "react-router-dom";
import { useProductById } from "../hooks/use-product";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Loading from "@/components/layout/Loading";
import { Button } from "@/components/ui/button";
import { useCart } from "@/cases/carrinho/hooks/use-cart";

export default function GetProduct() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProductById(id!);
  const { dispatch } = useCart();

  function addToCart() {
    dispatch({
      type: "ADD",
      item: {
        id: product?.id,
        name: product!.name,
        price: product!.price,
      }
    });
  }


  if (isLoading) {
    return (
      <main className="flex justify-center items-center h-screen">
        <p className="text-muted-foreground"><Loading /></p>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center items-center bg-muted rounded-xl p-6 shadow-sm">
      </div>
      
      <Card className="shadow-md border rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{product?.name}</CardTitle>

          <div className="flex gap-2 mt-2">
            {product?.category && (
              <a href={`/categoria/${product.category.id}`}><Badge variant="secondary">{product.category.name}</Badge></a>
            )}
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="flex flex-col gap-4 mt-4">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">
              Descrição
            </h3>
            <p className="text-base">{product?.description}</p>
          </div>

          {product?.brand?.name && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                Marca
              </h3>
              <p className="text-base">{product?.brand.name}</p>
            </div>
          )}

          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                Preço
              </h3>
              <p className="text-xl font-semibold tracking-wide">
                R$ {Number(product?.price).toFixed(2)}
              </p>
            </div>
            <Button 
            variant="default" 
            className="my-auto"
            onClick={addToCart}
            >
              Adicionar ao Carrinho
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
