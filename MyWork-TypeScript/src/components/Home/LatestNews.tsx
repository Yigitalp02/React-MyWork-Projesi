// src/components/LatestNews.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './latestNews.css';

const LatestNews: React.FC = () => {
  const [news, setNews] = useState<any[]>([]); // Haberler için state
  const [error, setError] = useState<string | null>(null); // Hata mesajı için state
  const fallbackImage = 'https://via.placeholder.com/150'; // Yedek resim URL'i

  useEffect(() => {
    // Haberleri fetch eden asenkron fonksiyon
    const fetchNews = async () => {
      try {
        // New York Times API'sinden haberleri al
        const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json', {
          params: {
            'api-key': 'HvwFcwgE3AP69sHN99OfmtAvLujuFMPm', // API anahtarı
          },
        });
        console.log(response.data.results); // Gelen verileri konsola yazdır
        setNews(response.data.results); // Gelen verileri state'e kaydet
      } catch (err) {
        setError('Failed to fetch news'); // Hata durumunda hata mesajını state'e kaydet
        console.error("Error fetching news:", err); // Hata mesajını konsola yazdır
      }
    };

    fetchNews(); // Fonksiyonu çağır
  }, []);

  // HTTPS protokolünü zorunlu hale getiren fonksiyon
  const ensureHttps = (url: string) => {
    if (!url) return fallbackImage; // URL yoksa yedek resim kullan
    return url.startsWith('http:') && window.location.protocol === 'https:'
      ? url.replace('http:', 'https:') // URL HTTP ile başlıyorsa ve site HTTPS ise HTTPS ile değiştir
      : url;
  };

  // Hata varsa hata mesajını göster
  if (error) {
    return <div id="latest-news" className="latest-news">{error}</div>;
  }

  return (
    <div id="latest-news" className="latest-news">
      <h2>Hot Topics</h2>
      {news.length > 0 && ( // Haberler varsa ilk haberi göster
        <div className="hot-topic">
          <img
            src={ensureHttps(news[0].multimedia && news[0].multimedia[0] ? news[0].multimedia[0].url : '') || fallbackImage} // Resim URL'ini HTTPS yap ve yoksa yedek resmi kullan
            alt="Hot Topic"
            className="hot-topic-image"
          />
          <div className="hot-topic-details">
            <h3>{news[0].title}</h3>
            <p>{news[0].published_date} - {news[0].source}</p> 
          </div>
        </div>
      )}
      <h2>Latest News</h2>
      <div className="latest-news-list">
        {news.slice(1, 4).map((article, index) => { // İlk haberi atla ve sonraki 3 haberi listele
          const imageUrl = ensureHttps(article.multimedia && article.multimedia[0] ? article.multimedia[0].url : '');
          console.log(`Article ${index + 1} Image:`, imageUrl); // Her haberin resim URL'ini konsola yazdır
          return (
            <div key={index} className="latest-news-item">
              <img
                src={imageUrl} // Resim URL'i
                alt="Latest News"
                className="latest-news-image"
              />
              <p>{article.title}</p> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestNews;
