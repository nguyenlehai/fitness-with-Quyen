## Next.js static blog 
- Using Notion as a Content Management System (CMS).
- Supports both Blog format Post as well as Page format for Resume. 
- Deployed using Vercel.

### Features
**📒 Writing posts using notion**

- No need of commiting to Github for posting anything to your website.
- Posts made on Notion are automaticaly updated on your site.

**📄 Use as a page as resume**

- Useful for generating full page sites using Notion.
- Can be used for Resume, Portfolios etc.

**👀 SEO friendly**

- Dynamically generates OG IMAGEs (thumbnails!) for posts.
- Dynamically creates sitemap for posts.

**🤖 Customisable and Supports various plugin through CONFIG**

- Your profile information can be updated through Config. (`site.config.js`)
- Plugins support includes, Google Analytics, Search Console and also Commenting using Github Issues(Utterances) or Cusdis.
- Enviroment file: `.env.local` for setting up environment variables.
   - `NOTION_PAGE_ID` (Required): The Notion page Id got from the Share to Web URL. This is not the entire URL, but just the NOTION_PAGE_ID part as shown above.
   - `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` : For Google analytics Plugin.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` : For Google search console Plugin.
   - `NEXT_PUBLIC_NAVER_SITE_VERIFICATION` : For Naver search advisor Plugin.
   - `NEXT_PUBLIC_UTTERANCES_REPO` : For Utterances Plugin.
