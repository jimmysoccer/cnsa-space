import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import {
  Image,
  GalleryHorizontal,
  X,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { DefaultMissionImage } from '@/constants/missionConstants';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
} from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface MissionGalleryProps {
  images: string[];
  title: string;
}

const MissionGallery: React.FC<MissionGalleryProps> = ({ images, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use default image if no images are provided
  const galleryImages =
    images && images.length > 0 ? images : [DefaultMissionImage];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setIsModalOpen(false);
  };

  return (
    <div className='bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20 mb-6'>
      <h2 className='font-orbitron text-xl text-space-accent mb-4 flex items-center'>
        <GalleryHorizontal className='h-5 w-5 mr-2 text-space-accent' />
        任务图库
      </h2>
      <Carousel className='w-full'>
        <CarouselContent>
          {galleryImages.map((img, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card
                  className='border-space-accent/20 bg-space-dark/70 cursor-pointer hover:border-space-accent/50 transition-colors'
                  onClick={() => handleImageClick(index)}
                >
                  <CardContent className='p-0'>
                    <AspectRatio ratio={16 / 9} className='bg-space-dark/30'>
                      <img
                        src={img}
                        alt={`${title} - 图片 ${index + 1}`}
                        className='object-cover w-full h-full rounded-md'
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            DefaultMissionImage;
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

      {/* Full screen image modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className='max-w-[90vw] w-full p-0 border-space-accent/30 bg-space-dark/95 backdrop-blur-xl'
          onKeyDown={handleKeyDown}
          aria-description='图片查看器'
        >
          <VisuallyHidden>
            <DialogDescription></DialogDescription>
            <DialogTitle>{`${title} - 图片查看器`}</DialogTitle>
          </VisuallyHidden>
          <div className='relative flex flex-col items-center'>
            {/* Image container */}
            <div className='relative w-full h-[80vh] flex items-center justify-center p-4'>
              <img
                src={galleryImages[currentImageIndex]}
                alt={`${title} - 图片 ${currentImageIndex + 1}`}
                className='max-h-full max-w-full object-contain'
                onError={(e) => {
                  (e.target as HTMLImageElement).src = DefaultMissionImage;
                }}
              />

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className='absolute left-4 p-2 rounded-full bg-space-dark/80 backdrop-blur-sm hover:bg-space-dark text-space-light border border-space-accent/30'
              >
                <ArrowLeft className='h-6 w-6' />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className='absolute right-4 p-2 rounded-full bg-space-dark/80 backdrop-blur-sm hover:bg-space-dark text-space-light border border-space-accent/30'
              >
                <ArrowRight className='h-6 w-6' />
              </button>
            </div>

            {/* Image counter */}
            <div className='absolute top-4 left-4 px-3 py-1 rounded-md bg-space-dark/80 backdrop-blur-sm text-space-light'>
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MissionGallery;
