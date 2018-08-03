webpackJsonp([0xad0d6fe7a47],{336:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Async action API in <strong>Tiny Atom</strong> is probably the key differentiator from other state management libraries out there. Each action function can read and modify state multiple times and even dispatch other actions. Async actions work exactly the same as sync actions.</p>\n<p>An example of regular action:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>\n  increment<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>And here’s how an async action looks like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>\n  fetchMetrics<span class="token punctuation">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">,</span> <span class="token keyword">set</span><span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'/metrics\'</span><span class="token punctuation">)</span>\n      <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> res<span class="token punctuation">.</span>data <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> error<span class="token punctuation">:</span> err<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">\'trackError\'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The trick is you can use <code class="language-text">get</code>, <code class="language-text">set</code> and <code class="language-text">dispatch</code> in your action as many times as you need. This approach helps keep all business logic self contained, when performing complex state transitions.</p>',excerpt:"Async action API in  Tiny Atom  is probably the key differentiator from other state management libraries out there. Each action function can…",timeToRead:1,frontmatter:{title:"Async actions"},parent:{__typename:"File",relativePath:"async-actions.md"}}},pathContext:{slug:"/async-actions/"}}}});
//# sourceMappingURL=path---async-actions-f2f91127bfa127b31daf.js.map