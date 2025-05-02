
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Image, GalleryHorizontal } from 'lucide-react';
import { DefaultMissionImage } from '@/constants/missionConstants';

interface MissionGalleryProps {
  images: string[];
  title: string;
}

const MissionGallery: React.FC<MissionGalleryProps> = ({ images, title }) => {
  // Use default image if no images are provided
  const galleryImages = images && images.length > 0 
    ? images 
    : [DefaultMissionImage];

  return (
    <div className='bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20 mb-6'>
      <h2 className='font-orbitron text-xl text-space-accent mb-4 flex items-center'>
        <GalleryHorizontal className='h-5 w-5 mr-2 text-space-accent' />
        任务图库
      </h2>
      <Carousel className='w-full'>
        <CarouselContent>
          {galleryImages.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className='border-space-accent/20 bg-space-dark/70'>
                  <CardContent className='p-0'>
                    <AspectRatio ratio={16/9} className="bg-space-dark/30">
                      <img
                        src={img}
                        alt={`${title} - 图片 ${index + 1}`}
                        className='object-cover w-full h-full rounded-md'
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = DefaultMissionImage;
                        }}
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-2 top-1/2' />
        <CarouselNext className='right-2 top-1/2' />
      </Carousel>
    </div>
  );
};

export default MissionGallery;
