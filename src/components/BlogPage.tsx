'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Input } from '@/components/ui/input';
import PageTemplate from './PageTemplate';
import { 
  ArrowLeft,
  ArrowRight,
  Calendar,
  User,
  BookOpen,
  Search,
  Filter,
  Heart,
  CheckCircle,
  Loader2
} from 'lucide-react';

// Blog metadata interface
interface BlogMetadata {
  id: number;
  title: string;
  author: string;
  publishDate: string;
  category: string;
  excerpt: string;
  readTime: string;
  tags: string[];
}

// Full blog interface including content
interface Blog extends BlogMetadata {
  content?: string;
}

interface BlogCardProps {
  blog: BlogMetadata;
  onExpand: (blogId: number) => void;
  isLoading?: boolean;
}

// Simple markdown renderer function
function markdownToHtml(markdown: string): string {
  return markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3 style="font-size: 1.5rem; font-weight: 600; color: #343A40; margin: 24px 0 16px 0; line-height: 1.3;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="font-size: 2rem; font-weight: 700; color: #343A40; margin: 32px 0 20px 0; line-height: 1.2;">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 style="font-size: 2.5rem; font-weight: 700; color: #343A40; margin: 40px 0 24px 0; line-height: 1.1;">$1</h1>')
    
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote style="border-left: 4px solid #4ECDC4; padding-left: 16px; margin: 24px 0; font-style: italic; color: #6C757D; background: #F8F9FA; padding: 16px; border-radius: 4px;">$1</blockquote>')
    
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: 600; color: #343A40;">$1</strong>')
    
    // Images
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="width: 100%; max-width: 600px; height: 300px; object-fit: cover; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />')
    
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: #007BFF; text-decoration: underline;" target="_blank" rel="noopener noreferrer">$1</a>')
    
    // Paragraphs (double line breaks)
    .replace(/\n\n/g, '</p><p style="margin: 16px 0; line-height: 1.7; color: #343A40;">')
    
    // Single line breaks
    .replace(/\n/g, '<br/>')
    
    // Wrap in paragraph tags
    .replace(/^/, '<p style="margin: 16px 0; line-height: 1.7; color: #343A40;">')
    .replace(/$/, '</p>')
    
    // Clean up empty paragraphs
    .replace(/<p[^>]*><\/p>/g, '')
    .replace(/<p[^>]*><h/g, '<h')
    .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
    .replace(/<p[^>]*><blockquote/g, '<blockquote')
    .replace(/<\/blockquote><\/p>/g, '</blockquote>');
}

function BlogCard({ blog, onExpand, isLoading }: BlogCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-white border-[#E5E7EB] hover:border-[#4ECDC4] h-full cursor-pointer"
          onClick={() => onExpand(blog.id)}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="secondary" className="bg-[#4ECDC4]/10 text-[#4ECDC4]">
            {blog.category}
          </Badge>
          <span className="text-sm text-[#6C757D]">{blog.readTime}</span>
        </div>
        <CardTitle className="text-xl font-bold text-[#343A40] mb-3 group-hover:text-[#4ECDC4] transition-colors leading-tight">
          {blog.title}
        </CardTitle>
        <CardDescription className="text-[#6C757D] text-base leading-relaxed">
          {blog.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-sm text-[#6C757D] mb-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-[#E5E7EB] text-[#6C757D]">
              {tag}
            </Badge>
          ))}
        </div>
        <Button 
          className="w-full bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white group-hover:shadow-lg transition-all mt-auto"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              Read Full Article
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

interface ExpandedBlogProps {
  blog: Blog;
  onClose: () => void;
  isLoading: boolean;
}

function ExpandedBlog({ blog, onClose, isLoading }: ExpandedBlogProps) {
  const htmlContent = useMemo(() => {
    return blog.content ? markdownToHtml(blog.content) : '';
  }, [blog.content]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-full py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-4">
              <Button 
                variant="ghost" 
                onClick={onClose}
                className="text-[#6C757D] hover:text-[#4ECDC4]"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
              <Badge className="bg-[#4ECDC4]/10 text-[#4ECDC4]">
                {blog.category}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-[#6C757D] mb-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-[#4ECDC4] text-[#4ECDC4]">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-[#4ECDC4]" />
                <span className="ml-3 text-[#6C757D]">Loading article content...</span>
              </div>
            ) : (
              <div 
                className="prose prose-lg max-w-none"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.7'
                }}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            )}
          </div>
          
          {/* Footer */}
          <div className="p-6 border-t border-[#E5E7EB] bg-[#F8F9FA]">
            <div className="flex items-center justify-between">
              <div className="text-sm text-[#6C757D]">
                Published on {new Date(blog.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <Button 
                onClick={onClose}
                className="bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white"
              >
                Close Article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedBlog, setExpandedBlog] = useState<Blog | null>(null);
  const [blogData, setBlogData] = useState<BlogMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingBlogId, setLoadingBlogId] = useState<number | null>(null);
  const [contentLoading, setContentLoading] = useState(false);

  const categories = ['All', 'Equipment', 'Training', 'Monitoring', 'General'];

  // Load blog metadata on component mount
  useEffect(() => {
    const loadBlogData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/blogs/blogs.json');
        if (!response.ok) {
          throw new Error('Failed to load blog data');
        }
        const data: BlogMetadata[] = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error loading blog data:', error);
        setBlogData([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogData();
  }, []);

  // Function to load individual blog content
  const loadBlogContent = async (blogId: number) => {
    const blogMetadata = blogData.find(blog => blog.id === blogId);
    if (!blogMetadata) return;

    try {
      setLoadingBlogId(blogId);
      setContentLoading(true);
      
      const response = await fetch(`/blogs/${blogId}.md`);
      if (!response.ok) {
        throw new Error(`Failed to load blog content for ID ${blogId}`);
      }
      
      const content = await response.text();
      const fullBlog: Blog = {
        ...blogMetadata,
        content
      };
      
      setExpandedBlog(fullBlog);
    } catch (error) {
      console.error('Error loading blog content:', error);
      // Still show the modal but with an error message
      setExpandedBlog({
        ...blogMetadata,
        content: '## Error Loading Content\n\nSorry, we couldn\'t load this article content. Please try again later.'
      });
    } finally {
      setLoadingBlogId(null);
      setContentLoading(false);
    }
  };

  const filteredBlogs = useMemo(() => {
    return blogData.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogData, searchTerm, selectedCategory]);

  return (
    <PageTemplate currentPage="blog">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#F8F9FA] py-4 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-[#6C757D] hover:text-[#4ECDC4]">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#4ECDC4] font-medium">
                  Blog
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8F9FA] to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#343A40] mb-6 leading-tight">
              HomeHealHub Blog
            </h1>
            <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
              Stay informed with the latest insights, tips, and best practices in home healthcare. 
              Our expert-reviewed articles help you navigate your healthcare journey with confidence.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#6C757D] mb-8">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#4ECDC4]" />
                <span>{blogData.length}+ Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-[#4ECDC4]" />
                <span>Expert Reviewed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#4ECDC4]" />
                <span>Evidence-Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#6C757D]" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg border-[#E5E7EB] focus:border-[#4ECDC4] focus:ring-[#4ECDC4]"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white" 
                    : "border-[#E5E7EB] text-[#6C757D] hover:border-[#4ECDC4] hover:text-[#4ECDC4]"
                  }
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-[#4ECDC4]" />
              <span className="ml-3 text-[#6C757D]">Loading blog articles...</span>
            </div>
          ) : filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard 
                  key={blog.id} 
                  blog={blog} 
                  onExpand={loadBlogContent}
                  isLoading={loadingBlogId === blog.id}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-[#6C757D] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#343A40] mb-2">No articles found</h3>
              <p className="text-[#6C757D] mb-6">Try adjusting your search terms or category filter.</p>
              <Button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                variant="outline"
                className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Expanded Blog Modal */}
      {expandedBlog && (
        <ExpandedBlog 
          blog={expandedBlog} 
          onClose={() => setExpandedBlog(null)}
          isLoading={contentLoading}
        />
      )}
    </PageTemplate>
  );
}