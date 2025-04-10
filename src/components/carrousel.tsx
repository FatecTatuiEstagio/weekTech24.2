import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"; 
import { Card, CardContent } from "@/components/ui/card";

import slide1 from "../imgs/eventos/20242/carrousel/slide1.jpeg";
import slide2 from "../imgs/eventos/20242/carrousel/slide2.jpeg";
import slide3 from "../imgs/eventos/20242/carrousel/slide3.jpeg";
import slide4 from "../imgs/eventos/20242/carrousel/slide4.jpeg";

const images = [slide1, slide2, slide3, slide4];

export default function ImageCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}