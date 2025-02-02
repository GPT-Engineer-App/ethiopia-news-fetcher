import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchNews = async () => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  if (!apiKey) {
    throw new Error("API key is missing");
  }
  const response = await fetch(`https://newsapi.org/v2/everything?q=Ethiopia&apiKey=${apiKey}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Network response was not ok: ${errorData.message}`);
  }
  return response.json();
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useQuery({
    queryKey: ["ethiopianNews"],
    queryFn: fetchNews,
  });

  useEffect(() => {
    if (error) {
      toast.error(`Error fetching news: ${error.message}`);
    }
  }, [error]);

  const filteredNews = data?.articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Ethiopian News</h1>
      <Input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      {isLoading ? (
        <Skeleton className="w-full h-24 mb-4" />
      ) : error ? (
        <div className="text-red-500">Error fetching news: {error.message}</div>
      ) : (
        <div className="grid gap-4">
          {filteredNews.map((article, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Read More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;