webpackJsonp([87173699984420],{518:function(n,s){n.exports={data:{markdownRemark:{html:'<p>This section reviews how <strong>Tiny Atom</strong> differs from existing state management solutions. It also lists some alternative approaches to state management.</p>\n<h2 id="redux"><a href="#redux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Redux</h2>\n<p>Ok, so here’s the question you’ve all been waiting for. How is <strong>Tiny Atom</strong> different from Redux? Yes, <strong>Tiny Atom</strong> is very much inspired by Redux and Redux’s inspirations. We really like the idea of:</p>\n<ul>\n<li>having a single store</li>\n<li>which is only mutated by sending actions</li>\n</ul>\n<p>It makes sense. It’s something that we find easy to reason about. But having worked with Redux for a while, like <a href="https://medium.freecodecamp.org/whats-so-great-about-redux-ac16f1cc0f8b">a lot of the community</a>, we’ve gotten tired from the boilerplate and confusing api. Should I put my logic into action creators or into reducers? What if I want to access different parts of my state in the reducer? Why do I need to create constants, actions, action creators, reducers and use middleware to do anything?</p>\n<p>By the way, this isn’t meant to be an attack on Redux or it’s wonderful creators! We really do like the idea behind Redux. In fact, we’re still using Redux heavily in production. We just wondered - is there a simpler API that still captures the essence of Redux?</p>\n<p>Now, <strong>Tiny Atom</strong> and Redux are really quite similar in most ways. What you can do in one, you can do in the other. Well, not entirely true. You can possibly do more in Redux. Especially when it comes to applying some of the more advanced side effect techniques such as <a href="https://github.com/redux-saga/redux-saga">redux-saga</a>.</p>\n<p>The main difference in <strong>Tiny Atom</strong> is how the store handles actions. The “reducer” (called <code>evolve</code>) in <strong>Tiny Atom</strong> is not a pure function - it can make sync and async updates to the state. And this, we think, makes all the difference.</p>\n<p>Let’s look at some code snippets comparing the two.</p>\n<h4 id="redux-1"><a href="#redux-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Redux</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'redux\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">todos</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'ADD_TODO\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>action<span class="token punctuation">.</span>text<span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>todos<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'Use Redux\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\nstore<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">\'ADD_TODO\'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">\'Read the docs\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">// [ \'Use Redux\', \'Read the docs\' ]</span>\n</code></pre>\n      </div>\n<h4 id="tiny-atom"><a href="#tiny-atom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tiny Atom</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> createStore <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'tiny-atom\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">todos</span> <span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">,</span> split<span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> payload <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'addTodo\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">let</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> list<span class="token punctuation">:</span> list<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>payload<span class="token punctuation">.</span>text<span class="token punctuation">]</span><span class="token punctuation">)</span>\n      <span class="token keyword">break</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span> list<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'Use Tiny Atom\'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> todos<span class="token punctuation">)</span>\n\nstore<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'addTodo\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">\'Read the docs\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">// [ \'Use Tiny Atom\', \'Read the docs\' ]</span>\n</code></pre>\n      </div>\n<p>Why is <code>dispatch</code> called <code>split</code>? To give <strong>Tiny Atom</strong> a bit of it’s own distinct identity. And splitting the atom, you know? Thing with <code>split</code> is that it can be used inside the reducer to perform many sync and async updates. It can also <code>split</code> further actions. Here’s an example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> createAtom <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'tiny-atom\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>\n  fetch<span class="token punctuation">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">,</span> split<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// first split</span>\n    <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'/todos\'</span><span class="token punctuation">)</span>\n      <span class="token comment">// second split</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> list<span class="token punctuation">:</span> <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>todos<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// in case this errored</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> err <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token comment">// split another action</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'track\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> event<span class="token punctuation">:</span> <span class="token string">\'fetchFailed\'</span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> err<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n      <span class="token comment">// split more</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  track<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">,</span> split<span class="token punctuation">,</span> payload<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    sentry<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">evolve</span> <span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">,</span> split<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  actions<span class="token punctuation">[</span>action<span class="token punctuation">.</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">get</span><span class="token punctuation">,</span> split<span class="token punctuation">,</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token function">createAtom</span><span class="token punctuation">(</span><span class="token punctuation">{</span> list<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> evolve<span class="token punctuation">)</span>\n\natom<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'fetch\'</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><strong>We found that this way of asynchronously updating the state reduces the boilerplate and improves readability of the code. The relevant logic is self contained instead of being scattered around.</strong></p>\n<p>To summarise, <strong>Tiny Atom</strong>:</p>\n<ul>\n<li>is similar to Redux</li>\n<li>does not have action creators</li>\n<li>keeps the business logic in the “reducer” called <code>evolve</code></li>\n<li><code>evolve</code> can make changes to the state synchronously and asynchronously</li>\n</ul>\n<h2 id="declarative-state-management"><a href="#declarative-state-management" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Declarative state management</h2>\n<p>Sometimes, the single store approach isn’t the best choice for your application. For really simple applications I found <code>react-refetch</code> to work really well. You bind your components directly to rest endpoints and get the data passed as props. A more powerful and quite a promising approach is to use GraphQL based frameworks. Each of your components binds data and state with GraphQL fragments that get combined and resolved.</p>\n<ul>\n<li><a href="https://github.com/apollographql/apollo-client">apollo-client</a></li>\n<li><a href="https://github.com/heroku/react-refetch">react-refetch</a></li>\n</ul>\n<h2 id="dispatching-functions"><a href="#dispatching-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dispatching functions</h2>\n<p>There exists another wave of Redux alternatives that try and do away with the boilerplate by dispatching state modifying functions directly instead of dispatching actions as plain objects. For example:</p>\n<ul>\n<li><a href="https://github.com/concretesolutions/redux-zero">redux-zero</a></li>\n<li><a href="https://github.com/madx/elfi">elfi</a></li>\n<li><a href="https://github.com/algesten/refnux">refnux</a></li>\n</ul>\n<p>These look very cool and we’re still wondering if they are a better alternative. They allow to contain the state transition logic closer to components. Having said that, there’s something nice about the mental model of sending messages to a central place and containing the state transitions completely outside of components. Your views are a tree which is a projection of your state tree. Keeping the two separate and independent makes some sense.</p>\n<h2 id="cursors"><a href="#cursors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cursors</h2>\n<p>When <a href="https://github.com/omcljs/om">Om</a> first came around, it popularised the cursor approach to managing the state. The idea was roughly to pass around an object – cursor, which could be used to read the state. It could then also be used to mutate the state directly, but instead of mutating the object in place it would trigger an update to subscribers with the new updated state.</p>\n<p>In a lot of ways, it’s not too dissimilar from passing a <strong>Tiny Atom</strong> atom around which you use to read of state. <strong>Tiny Atom</strong> even allows directly modifying the state with a patch <code>split({ count: 5 })</code>, similar to how you would update a cursor. Except you don’t need to learn a custom API, you just work with plain JavaScript.</p>\n<p><em>Note: apologies if I’m misunderstanding cursors entirely, feel free to post an GH issue or edit this page</em>.</p>\n<ul>\n<li><a href="https://github.com/Yomguithereal/baobab">baobab</a></li>\n</ul>\n<h2 id="observables-and-fractals"><a href="#observables-and-fractals" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Observables and fractals</h2>\n<p>Another fascinating approach, but I’m not familiar enough to comment much further. Observables seem to be quite cool if you “get” them, but I’ve been recently wondering if they don’t match everyone’s mental model.</p>\n<ul>\n<li><a href="https://github.com/staltz/cycle-onionify">cycle-onionify</a></li>\n</ul>',excerpt:"This section reviews how  Tiny Atom  differs from existing state management solutions. It also lists some alternative approaches to state…",timeToRead:5,frontmatter:{title:"Prior art"},parent:{__typename:"File",relativePath:"prior-art.md"}}},pathContext:{slug:"/prior-art/"}}}});
//# sourceMappingURL=path---prior-art-ca554ad9d9d4fdb3ad80.js.map