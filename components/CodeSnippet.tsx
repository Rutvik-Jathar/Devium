import React from 'react';

const CodeSnippet: React.FC = () => {
    return (
        <div className="bg-card rounded-lg shadow-2xl overflow-hidden border">
            <pre className="p-6 text-sm overflow-x-auto">
                <code className="font-mono">
                    <span className="text-pink-400">import</span> {'{ DeviumClient }'} <span className="text-pink-400">from</span> <span className="text-emerald-400">'@devium/sdk'</span>;
                    <br /><br />
                    <span className="text-muted-foreground/70">// Initialize the collaborative environment</span>
                    <br />
                    <span className="text-sky-400">const</span> session = <span className="text-pink-400">new</span> <span className="text-yellow-300">DeviumClient</span>({'{'}
                    <br />
                    {'  '}apiKey: process.env.<span className="text-sky-400">DEVIUM_API_KEY</span>,
                    <br />
                    {'  '}project: <span className="text-emerald-400">'your-project-id'</span>,
                    <br />
                    {'}'});
                    <br /><br />
                    <span className="text-muted-foreground/70">// Join a real-time coding session</span>
                    <br />
                    session.<span className="text-yellow-300">join</span>(<span className="text-emerald-400">'main-branch'</span>).<span className="text-yellow-300">then</span>(workspace {'=>'} {'{'}
                    <br />
                    {'  '}console.<span className="text-yellow-300">log</span>(<span className="text-emerald-400">'Successfully connected to workspace!'</span>);
                    <br />
                    {'  '}
                    <br />
                    {'  '}<span className="text-muted-foreground/70">// Listen for changes from collaborators</span>
                    <br />
                    {'  '}workspace.<span className="text-yellow-300">on</span>(<span className="text-emerald-400">'change'</span>, (event) {'=>'} {'{'}
                    <br />
                    {'    '}console.<span className="text-yellow-300">log</span>(<span className="text-emerald-400">{`\`User \${event.user} made a change.\``}</span>);
                    <br />
                    {'  '} {'}'});
                    <br />
                    {'}'});
                </code>
            </pre>
        </div>
    );
};

export default CodeSnippet;