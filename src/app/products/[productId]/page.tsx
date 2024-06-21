import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100)
  );
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>;
}

// every page in the app router recieves route parameters as a prop. We can destructure it as params

// The params object contains the route parameters as key value pairs

// in the case of product id route we have a single parameter which is the product id
