import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PortfolioSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="overflow-hidden flex flex-col h-full">
          <Skeleton className="h-56 w-full rounded-none" />
          <CardContent className="pt-6 flex-grow flex flex-col">
            <Skeleton className="h-6 w-24 mb-3" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-3/4 mb-4" />
          </CardContent>
          <CardFooter className="pt-0 mt-auto">
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-24" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default PortfolioSkeleton;
