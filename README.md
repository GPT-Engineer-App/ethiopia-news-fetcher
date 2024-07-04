# ethiopia-news-fetcher

An app showing the top 100 stories about Ethiopia. I need a feature in my app to fetch and display news about Ethiopia. Please follow these guidelines:Sources to Fetch News From:RSS Feeds:BBC News Africa: http://feeds.bbci.co.uk/news/world/africa/rss.xmlAl Jazeera Africa: https://www.aljazeera.com/xml/rss/all.xmlReuters Africa: http://feeds.reuters.com/reuters/AfricaNews APIs:NewsAPI.org: Use their API to fetch news articles about Ethiopia.GDELT Project: Integrate their database to get global news with Ethiopian events.Currents API: Aggregate news articles related to Ethiopia.Local News Websites:Addis Standard: Integrate the news from Addis StandardEthiopian News Agency (ENA): Fetch news from ENAThe Reporter Ethiopia: Use news from The Reporter EthiopiaInternational News Websites:BBC News: Fetch Ethiopian news from BBC News EthiopiaAl Jazeera: Integrate news from Al Jazeera EthiopiaReuters: Use Reuters Ethiopia for news updates.Social Media and Aggregators:Twitter: Use Twitter API to track hashtags and handles related to Ethiopian news.Google News: Integrate with Google News to fetch the latest articles about Ethiopia.Integration Instructions:For RSS Feeds, parse the XML feeds to display the latest news articles in the app.For APIs, make HTTP requests to fetch the latest news articles and parse the JSON responses.For Websites, if they don’t have an API, use web scraping to fetch the news articles.For Social Media, use Twitter’s API to track relevant hashtags and user handles for Ethiopian news. Compliance:Ensure the app complies with the terms of service of each news source.Attribute the news sources as required. Show the name of the story, number of upvotes, and a read more link. Include a search box to filter stories & a skeleton placeholder while fetching.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/ethiopia-news-fetcher.git
cd ethiopia-news-fetcher
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
