# Backend for Deepseek R1 local with Nestjs

---

**Description**  
This project is a robust backend API built with **Nest.js** that seamlessly integrates with **Ollama**, a local AI inference engine, to deliver real-time streaming responses. Designed for developers seeking to leverage AI models locally while maintaining high performance, this API supports:  

- **Real-Time Text Streaming**: Stream AI-generated responses instantly using Server-Sent Events (SSE).  
- **Local AI Processing**: Run AI models (e.g., Deepseek-R1, LLaMA, Mistral) entirely on your hardware via Ollama, ensuring data privacy and low latency.  
- **REST API Endpoints**: Simple and structured endpoints for synchronous AI interactions.  
- **Scalable Architecture**: Built with Nest.js's modular design and RxJS for efficient asynchronous operations.  
- **Error Handling & Observability**: Graceful error recovery and logging for production-ready deployments.  

Ideal for chatbots, AI assistants, or any application requiring real-time AI interactions without relying on cloud-based APIs.  

---

**Features**  
- 🚀 **Streaming Support**: Deliver AI responses chunk-by-chunk via SSE for seamless user experiences.  
- 🔒 **Local Inference**: Process prompts entirely on your machine using Ollama's local AI models.  
- 🛠️ **Easy Integration**: RESTful endpoints and clear documentation for quick setup.  

---

**Why Choose This Project?**  
- **Efficiency**: Blazing-fast response times by combining Nest.js's efficiency with Ollama's local AI processing.  
- **Developer Experience**: Clean, TypeScript-first codebase with Nest.js's modular architecture.  
- **Versatility**: Compatible with any Ollama-supported model (7B to 70B parameters).  
- **Community-Driven**: Built with open-source tools and extensible for custom use cases.  

---

**Quick Start**  
1. **Install Ollama**:  
   ```bash  
   curl -fsSL https://ollama.com/install.sh | sh  
   ollama pull deepseek-r1:7b
   ollama serve  
   ```  

2. **Run the API**:  
   ```bash  
   npm install  
   npm run start:dev  
   ```  

3. **Test Streaming**:  
   ```bash  
   curl -N "http://localhost:3000/api/ask-stream?prompt=Explain%20quantum%20computing"  
   ```  

---

**Tech Stack**  
- **Backend**: Nest.js, TypeScript  
- **AI Inference**: Ollama, Deepseek-R1  
- **Streaming**: Server-Sent Events (SSE), RxJS  

---

**Contribute**  
PRs are welcome! Check out the [issues](https://github.com/yourusername/yourrepo/issues) for feature requests or bugs.  

🌟 **Star the repo** if you find this project useful!  

--- 