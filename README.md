# Mastering Generative AI & Agents Portfolio

Portfolio of AI projects built during the Codecademy 6-week bootcamp (August - September 2025). Demonstrates practical application of LangChain, RAG systems, multi-agent architectures, and modern AI development patterns.

**Live:** https://www.aitomatic.io/

## Projects

### Completed

**AI Comparison Showcase**
- Side-by-side comparison of GPT-4, Claude 3.5, and Gemini responses
- Real-time streaming with response metrics
- Live: https://ai-comparison-showcase.vercel.app

**AI Code Generator**
- Natural language to code with multi-language support
- Automated test generation and documentation
- Live: https://ai-code-generator-rouge.vercel.app/

**SQL-Ball**
- Football data analytics platform with natural language queries
- LangChain to SQL conversion with PostgreSQL backend
- Live: https://sql-ball.vercel.app/

### In Development

- Git Review Assistant (automated PR reviews via LangChain)
- RAG Chatbot (semantic search with Pinecone)
- Multi-Agent System (LangGraph coordination)
- Dev Workflow Agent (MCP integration for automation)

## Running Locally

**Requirements:** Node 20+, npm 10.9.2

```bash
npm install
npm run dev
```

Navigate to http://localhost:3000

**Building:**
```bash
npm run build
npm run start
```

## Tech Stack

- **Frontend:** Next.js 15.5, React 19, TypeScript 5.7
- **Styling:** Tailwind CSS 4.0, Anime.js for animations
- **AI Frameworks:** LangChain 0.3, OpenAI API, Anthropic API
- **Backend:** Node.js, PostgreSQL, Supabase
- **Infrastructure:** Vercel, GitHub Actions

## Environment Variables

The project is configured to use these environment variables via Turbo:

```
NODE_ENV                  # Development or production
NEXT_PUBLIC_APP_URL      # Application URL
NEXT_PUBLIC_API_URL      # API endpoint
OPENAI_API_KEY           # For AI features
ANTHROPIC_API_KEY        # For Claude integration
DATABASE_URL             # PostgreSQL connection
PINECONE_API_KEY         # Vector database access
PINECONE_ENVIRONMENT     # Pinecone region
```

For local development, these are optional (the portfolio dashboard doesn't require API keys, but individual projects do).

## Architecture Notes

- Monorepo using Turbo for build orchestration
- `apps/dashboard` contains the main portfolio website
- Animation system using Anime.js with intersection observer for scroll-triggered effects
- Project data is statically defined (no database for portfolio itself)
- Cloudinary for image CDN

## Development Workflow

```bash
npm run lint              # ESLint across all workspaces
npm run type-check        # TypeScript checking
npm run format            # Prettier formatting
npm run clean             # Remove build artifacts
```

## Deployment

The dashboard deploys directly to Vercel via GitHub Actions. Images are served from Cloudinary.

## License

MIT License - see [LICENSE](LICENSE) file
