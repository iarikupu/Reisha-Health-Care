import { useEffect } from 'react';

// Sets the per-page <title> and <meta name="description"> on mount.
// Search engines that execute JS (Google, Bing) pick these up fine — but
// social-preview crawlers (Facebook/LinkedIn/WhatsApp/X) fetch raw HTML and
// never run JS, so they only ever see the static og:*/twitter:* tags in
// index.html. That's fine for a small site like this: one shared social
// preview for every page, but a real per-page description for search.
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
