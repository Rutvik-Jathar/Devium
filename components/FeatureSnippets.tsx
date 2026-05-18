
import React from 'react';

const SnippetWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-card rounded-lg shadow-2xl overflow-hidden border">
        <div className="p-6 text-sm overflow-x-auto">
            <pre><code className="font-mono">{children}</code></pre>
        </div>
    </div>
);

export const CollaborationSnippet: React.FC = () => (
    <SnippetWrapper>
        <span className="text-muted-foreground/70">{`// UserA's editor`}</span><br />
        <span className="text-pink-400">function</span> <span className="text-yellow-300">BubbleSort</span>(<span className="text-sky-400">arr</span>) {'{'}<br />
        {'  '}<span className="text-pink-400">for</span> (<span className="text-sky-400">let</span> i = 0; i &lt; arr.length; i++) {'{'}<br />
        {'    '}<span className="text-pink-400">for</span> (<span className="text-sky-400">let</span> j = 0; j &lt; arr.length - i - 1; j++) {'{'}<br />
        {'      '}<span className="text-pink-400">if</span> (arr[j] &gt; arr[j + 1]) {'{'}<br />
        {'        '}<span className="text-sky-400">let</span> temp = arr[j];<br />
        {'        '}arr[j] = arr[j + 1];<br />
        {'        '}arr[j + 1] = temp;<span className="inline-block bg-blue-500/50 w-0.5 h-4 ml-px -mb-1 animate-pulse" /><span className="text-blue-400 text-xs -translate-y-2 absolute">UserB</span><br />
        {'      '}{'}'}<br />
        {'    '}{'}'}<br />
        {'  '}{'}'}<br />
        {'  '}<span className="text-pink-400">return</span> arr;<br />
        {'}'}
    </SnippetWrapper>
);

export const TerminalSnippet: React.FC = () => (
    <SnippetWrapper>
        <span className="text-emerald-400">$</span> npm install @devium/cli -g<br />
        <span className="text-muted-foreground/70">{`> devium@1.0.0 install /usr/lib/node_modules/@devium/cli`}</span><br />
        <span className="text-muted-foreground/70">{`> node-gyp rebuild`}</span><br />
        + @devium/cli@1.0.0<br />
        added 1 package from 1 contributor in 2.345s<br /><br />
        <span className="text-emerald-400">$</span> devium start<br />
        <span className="text-yellow-300">Devium server listening on port 3000...</span><br />
        <span className="text-sky-400">Debugger attached.</span><br />
        <span className="inline-block bg-emerald-400 w-2 h-4 -mb-1 animate-pulse" />
    </SnippetWrapper>
);

export const IntegrationsSnippet: React.FC = () => (
    <SnippetWrapper>
        <span className="text-pink-400">name</span>: <span className="text-emerald-400">Deploy to Vercel</span><br />
        <span className="text-pink-400">on</span>: [<span className="text-emerald-400">push</span>]<br /><br />
        <span className="text-pink-400">jobs</span>:<br />
        {'  '}<span className="text-pink-400">deploy</span>:<br />
        {'    '}<span className="text-pink-400">runs-on</span>: <span className="text-emerald-400">ubuntu-latest</span><br />
        {'    '}<span className="text-pink-400">steps</span>:<br />
        {'      '}- <span className="text-pink-400">uses</span>: <span className="text-emerald-400">actions/checkout@v2</span><br />
        {'      '}- <span className="text-pink-400">name</span>: <span className="text-emerald-400">Setup Devium CLI</span><br />
        {'        '}<span className="text-pink-400">uses</span>: <span className="text-emerald-400">devium/setup-cli@v1</span><br />
        {'      '}- <span className="text-pink-400">name</span>: <span className="text-emerald-400">Deploy Project</span><br />
        {'        '}<span className="text-pink-400">run</span>: |<br />
        {'          '}devium link --project=$<span className="text-sky-400">{'{ secrets.PROJECT_ID }'}</span><br />
        {'          '}devium deploy --prod
    </SnippetWrapper>
);

export const SecuritySnippet: React.FC = () => (
    <SnippetWrapper>
        <span className="text-muted-foreground/70">{`# devium.workspace.json`}</span><br />
        {'{'}<br />
        {'  '}"<span className="text-sky-400">permissions</span>": {'{'}<br />
        {'    '}"<span className="text-emerald-400">user:rutvikjathar</span>": [<span className="text-emerald-400">"admin", "write"</span>],<br />
        {'    '}"<span className="text-emerald-400">user:deveshpathak</span>": [<span className="text-emerald-400">"admin", "write"</span>],<br />
        {'    '}"<span className="text-emerald-400">role:developer</span>": [<span className="text-emerald-400">"read"</span>]<br />
        {'  '}{'},'}<br />
        {'  '}"<span className="text-sky-400">environment</span>": {'{'}<br />
        {'    '}"<span className="text-emerald-400">secrets</span>": [<span className="text-emerald-400">"STRIPE_API_KEY", "DATABASE_URL"</span>]<br />
        {'  '}{'},'}<br />
        {'  '}"<span className="text-sky-400">networkPolicy</span>": {'{'}<br />
        {'    '}"<span className="text-emerald-400">ingress</span>": [<span className="text-emerald-400">"allow-all"</span>],<br />
        {'    '}"<span className="text-emerald-400">egress</span>": [<span className="text-emerald-400">"deny-all"</span>]<br />
        {'  '}{'}'}<br />
        {'}'}
    </SnippetWrapper>
);
