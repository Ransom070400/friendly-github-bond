
import { Button } from './ui/button';

export type FilterCategory = 'all' | 'event' | 'hackathon' | 'workshop';
export type FilterYear = 'all' | number;

interface GalleryFiltersProps {
  years: number[];
  onCategoryChange: (category: FilterCategory) => void;
  onYearChange: (year: FilterYear) => void;
  activeCategory: FilterCategory;
  activeYear: FilterYear;
}

const GalleryFilters = ({ 
  years, 
  onCategoryChange, 
  onYearChange, 
  activeCategory, 
  activeYear 
}: GalleryFiltersProps) => {
  const categories: FilterCategory[] = ['all', 'event', 'hackathon', 'workshop'];

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={activeCategory === category ? 
                "bg-sui-purple hover:bg-sui-purple/90" : 
                "hover:border-sui-purple/50"
              }
            >
              {category === 'all' ? 'All Categories' : 
                category.charAt(0).toUpperCase() + category.slice(1) + 's'}
            </Button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Years</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeYear === 'all' ? "default" : "outline"}
            size="sm"
            onClick={() => onYearChange('all')}
            className={activeYear === 'all' ? 
              "bg-sui-blue hover:bg-sui-blue/90" : 
              "hover:border-sui-blue/50"
            }
          >
            All Years
          </Button>
          
          {years.map(year => (
            <Button
              key={year}
              variant={activeYear === year ? "default" : "outline"}
              size="sm"
              onClick={() => onYearChange(year)}
              className={activeYear === year ? 
                "bg-sui-blue hover:bg-sui-blue/90" : 
                "hover:border-sui-blue/50"
              }
            >
              {year}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryFilters;
