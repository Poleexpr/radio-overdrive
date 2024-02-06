import RSS from 'rss';

export async function GET() {
  const posts = await function () {
    fetch('https://cloud.mave.digital/42223')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  var feed = new RSS({
    title: 'My RSS Feed',
    description: 'My feed all about my blog!', //optional
    feed_url: 'http://localhost:3000/feed',
    site_url: 'http://localhost:3000',
    copyright: `${new Date().getFullYear()} My Blog`,
    language: 'en', //optional
  });
  /*
        posts.forEach((post: any) => {
            feed.item({
                title: post.title,
                description: post.description,
                url: post.url,
                categories: post.tags, //optional
                author: post.author, //optional
                date: post.pubDate,
                custom_elements: [
                    {
                        "content:encoded": {
                            _cdata: post.html, // or you could put a HTML link to your own website instead
                        },
                    },
                ],
            });
        });
    */
  return new Response(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  });
}
