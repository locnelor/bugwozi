"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Space, 
  Button, 
  Divider, 
  Checkbox, 
  Radio, 
  Select,
  Collapse,
  Tag
} from 'antd';
import { 
  FilterOutlined, 
  ClearOutlined, 
  CaretRightOutlined 
} from '@ant-design/icons';

const { Group: CheckboxGroup } = Checkbox;
const { Group: RadioGroup } = Radio;

// Props type definition
interface SearchFiltersProps {
  initialState: {
    query: string;
    categories: string[];
    tags: string[];
    dateRange: string;
    sortBy: string;
    allCategories: Array<{ label: string, value: string }>;
    allTags: Array<{ label: string, value: string }>;
    dateOptions: Array<{ label: string, value: string }>;
    sortOptions: Array<{ label: string, value: string }>;
  }
}

export default function SearchFilters({ initialState }: SearchFiltersProps) {
  // State from props
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialState.categories);
  const [selectedTags, setSelectedTags] = useState<string[]>(initialState.tags);
  const [dateRange, setDateRange] = useState<string>(initialState.dateRange);
  const [sortBy, setSortBy] = useState<string>(initialState.sortBy);
  const [showFilters, setShowFilters] = useState(false);
  
  const router = useRouter();
  
  // Apply filters and update URL
  const applyFilters = () => {
    // Start with the current query
    const params = new URLSearchParams();
    
    // Add query if it exists
    if (initialState.query) {
      params.set('q', initialState.query);
    }
    
    // Add categories if selected
    if (selectedCategories.length > 0) {
      params.set('categories', selectedCategories.join(','));
    }
    
    // Add tags if selected
    if (selectedTags.length > 0) {
      params.set('tags', selectedTags.join(','));
    }
    
    // Add date range if not 'all'
    if (dateRange !== 'all') {
      params.set('date', dateRange);
    }
    
    // Add sort if not default
    if (sortBy !== 'relevance') {
      params.set('sort', sortBy);
    }
    
    // Navigate to the new URL
    router.push(`/search?${params.toString()}`);
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setDateRange('all');
    setSortBy('relevance');
    
    // Navigate with just the query parameter
    const params = new URLSearchParams();
    if (initialState.query) {
      params.set('q', initialState.query);
    }
    router.push(`/search?${params.toString()}`);
  };
  
  // Check if any filters are active
  const hasActiveFilters = () => {
    return (
      selectedCategories.length > 0 ||
      selectedTags.length > 0 ||
      dateRange !== 'all' ||
      sortBy !== 'relevance'
    );
  };
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <Button 
          icon={<FilterOutlined />} 
          onClick={() => setShowFilters(!showFilters)}
          type={showFilters ? "primary" : "default"}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
        
        {hasActiveFilters() && (
          <Button 
            icon={<ClearOutlined />} 
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
        )}
      </div>
      
      {/* Active filters display */}
      {hasActiveFilters() && (
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <span className="text-gray-600">Active filters:</span>
          
          {selectedCategories.map(catId => {
            const category = initialState.allCategories.find(c => c.value === catId);
            return category ? (
              <Tag 
                key={catId} 
                closable 
                onClose={() => {
                  setSelectedCategories(selectedCategories.filter(id => id !== catId));
                }}
              >
                Category: {category.label}
              </Tag>
            ) : null;
          })}
          
          {selectedTags.map(tagId => {
            const tag = initialState.allTags.find(t => t.value === tagId);
            return tag ? (
              <Tag 
                key={tagId} 
                closable 
                onClose={() => {
                  setSelectedTags(selectedTags.filter(id => id !== tagId));
                }}
              >
                Tag: {tag.label}
              </Tag>
            ) : null;
          })}
          
          {dateRange !== 'all' && (
            <Tag 
              closable 
              onClose={() => setDateRange('all')}
            >
              Date: {initialState.dateOptions.find(d => d.value === dateRange)?.label}
            </Tag>
          )}
          
          {sortBy !== 'relevance' && (
            <Tag 
              closable 
              onClose={() => setSortBy('relevance')}
            >
              Sort: {initialState.sortOptions.find(s => s.value === sortBy)?.label}
            </Tag>
          )}
        </div>
      )}
      
      {/* Filter panel */}
      {showFilters && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <Collapse 
            bordered={false} 
            className="bg-transparent" 
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            {/* Categories filter */}
            <Collapse.Panel 
              header="Categories" 
              key="categories" 
              className="bg-white mb-2 rounded"
            >
              <CheckboxGroup
                options={initialState.allCategories}
                value={selectedCategories}
                onChange={(checkedValues) => {
                  setSelectedCategories(checkedValues as string[]);
                }}
              />
            </Collapse.Panel>
            
            {/* Tags filter */}
            <Collapse.Panel 
              header="Tags" 
              key="tags" 
              className="bg-white mb-2 rounded"
            >
              <div className="max-h-60 overflow-y-auto">
                <CheckboxGroup
                  options={initialState.allTags}
                  value={selectedTags}
                  onChange={(checkedValues) => {
                    setSelectedTags(checkedValues as string[]);
                  }}
                />
              </div>
            </Collapse.Panel>
            
            {/* Date range filter */}
            <Collapse.Panel 
              header="Date Range" 
              key="date" 
              className="bg-white mb-2 rounded"
            >
              <RadioGroup
                options={initialState.dateOptions}
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              />
            </Collapse.Panel>
            
            {/* Sort order */}
            <Collapse.Panel 
              header="Sort By" 
              key="sort" 
              className="bg-white rounded"
            >
              <RadioGroup
                options={initialState.sortOptions}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              />
            </Collapse.Panel>
          </Collapse>
          
          <Divider />
          
          <div className="flex justify-end">
            <Space>
              <Button onClick={() => setShowFilters(false)}>
                Cancel
              </Button>
              <Button type="primary" onClick={applyFilters}>
                Apply Filters
              </Button>
            </Space>
          </div>
        </div>
      )}
    </div>
  );
} 