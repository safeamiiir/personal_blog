---
import PageLayout from "../layouts/PageLayout.astro";
---

<PageLayout>
  <div slot="main" class="prose dark:prose-invert max-w-none">
    <h1>What I'm Doing Now</h1>
    <p class="text-lg text-gray-600 dark:text-gray-400">
      This is my "now page" - a snapshot of what I'm currently focused on in my life and work.
      Last updated: June 3, 2025
      <!-- new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) -->
    </p>

    <div class="space-y-8 mt-8">
      <section>
        <h2>👨‍💻 Work</h2>
        <ul>
          <li>Building a platform that enables people with a quantum computing background to learn more about QEC (Quantum Error Correction)</li>
          <li>Writing technical articles on my blog</li>
          <li>Mentoring and training people how to break into tech</li>
          <li>Consulting people how to gain Global Talent Visa in the UK</li>
        </ul>
      </section>

      <section>
        <h2>📚 Learning</h2>
        <ul>
          <li>Learning more about how to design a software</li>
          <li>How to write code even if you're not a native in that technology</li>
          <li>How to communicate more effectively with the people and give them critical feedback</li>
        </ul>
      </section>

      <section>
        <h2>📚 Music, Book and Movies</h2>
        <ul>
          <li>I'm stuck with <a href="https://open.spotify.com/artist/0qG2Tf6fJaCuWKGz1IitKa?si=PsDLnK1lShGmc67Xm9co-Q">Moriaty</a> since my girl friend mentioned them, specially <a href="https://open.spotify.com/track/6Zw0NBdfr1VlVJjDRFwUe1?si=b067e7480cda4da0">Jimmy</a></li>
          <li>I'm not actively reading any book but I need to resume reading <a href="https://www.goodreads.com/book/show/27430374-hear-the-wind-sing">Hear the Wind Sing</a>by Haruki Murakami</li>
          <li>I'm watching <a href="https://en.wikipedia.org/wiki/Fleabag">Fleabag</a> at the moment and will continue watching the second season of <a href="https://en.wikipedia.org/wiki/Severance_(TV_series)">Severance</a> soon</li>
        </ul>
      </section>

    </div>

    <div class="mt-12 text-sm text-gray-500 dark:text-gray-400">
      <p>
        Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">nownownow.com</a>
      </p>
    </div>
  </div>
</PageLayout> 