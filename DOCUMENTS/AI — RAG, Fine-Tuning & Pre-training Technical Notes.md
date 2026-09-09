# AI — RAG, Fine-Tuning & Pre-training

## 1. RAG — Retrieval-Augmented Generation

### Definition

**RAG (Retrieval-Augmented Generation)** is a technique where an existing **Large Language Model (LLM)** uses external knowledge sources to retrieve relevant information and generate an answer based on that information.

Simple-ah:

> Existing AI model-a retrain pannaama, namma own data-la irundhu relevant information-a retrieve panni, adha LLM-ku context-ah kuduthu answer generate panna vaikkaradhu dhaan RAG.

### Examples of External Data

- PDF
- Word documents
- Database
- Website
- API
- Company documents
- Knowledge base

### RAG Pipeline

    Documents / Database / Website
                ↓
          Data Extraction
                ↓
             Chunking
                ↓
        Embedding Model
                ↓
        Vector Database
                ↓
          User Question
                ↓
        Query Embedding
                ↓
        Similarity Search
                ↓
        Relevant Chunks
                ↓
          LLM + Context
                ↓
        Generated Answer

### Important Technical Terms

**Chunking**

Large document-a smaller text portions-ah split pannradhu.

Example:

    Large PDF
       ↓
    Chunk 1
    Chunk 2
    Chunk 3
    Chunk 4

---

**Embedding**

Text-a numerical vector representation-ah convert pannradhu.

Example:

    "Python is a programming language"
                  ↓
            Embedding Model
                  ↓
        [0.21, -0.43, 0.87, ...]

Embedding model dhaan text-a vector-ah convert pannum.

---

**Vector**

Text-oda semantic meaning-a represent panna use pannra numerical representation.

Example:

    Text
      ↓
    [0.12, 0.45, -0.72, 0.31, ...]

---

**Vector Database**

Embeddings-a store panni, similar information-a quickly search panna use pannra database.

Examples:

- Pinecone
- Qdrant
- Weaviate
- Chroma
- Milvus
- pgvector

Important:

> Vector Database text-a vector-ah convert pannaadhu.

Usually:

    Text
      ↓
    Embedding Model
      ↓
    Vector
      ↓
    Vector Database

---

**Retrieval**

User question-ku relevant information-a database-la irundhu search panni edukkardhu.

Example:

    User:
    "College closing time enna?"

    ↓

    Vector Search

    ↓

    Relevant Chunk:
    "College working hours are 9 AM to 5 PM."

---

**Augmentation**

Retrieved information-a LLM-ku additional context-ah provide pannradhu.

    User Question
          +
    Retrieved Information
          ↓
       LLM Context

---

**Generation**

LLM retrieved context-a use panni final answer generate pannradhu.

### Important Point

RAG hallucination-a **reduce** panna help pannum.

But:

> RAG hallucination-a completely eliminate pannaadhu.

Wrong information retrieve aana, retrieval poor-ah irundha, or LLM context-a wrong-ah interpret panna, hallucination still occur aagalam.

---

# 2. Fine-Tuning

### Definition

**Fine-Tuning** is the process of adapting an already pre-trained model using a task-specific dataset by updating the model's parameters/weights.

Simple-ah:

> Already trained model-ku specific task, behavior, format, style-ku additional training kudukkaradhu dhaan Fine-Tuning.

### Basic Process

    Pre-trained LLM
           ↓
      Training Dataset
           ↓
       Tokenization
           ↓
       Fine-Tuning
           ↓
    Updated Parameters
           ↓
      Fine-Tuned Model

### Example

Normal LLM:

    User:
    Explain this code.

    Model:
    General explanation.

Fine-tuned model:

    User:
    Explain this code.

    Model:
    Unga organization define pannina
    specific format/style-la explanation.

### Fine-Tuning Use Cases

Fine-Tuning can be used for:

- Specific response style
- Instruction following
- Classification
- Domain-specific tasks
- Structured output
- Specialized behavior
- Conversation style

### Dataset

Fine-Tuning dataset necessarily Question-Answer pairs mattum irukka vendiya avasiyam illa.

Example:

    {
      "instruction": "Explain REST API",
      "input": "",
      "output": "REST API is..."
    }

Or conversational format:

    User: Explain REST API.
    Assistant: REST API is...

### LoRA

**LoRA = Low-Rank Adaptation**

LoRA is a **Parameter-Efficient Fine-Tuning (PEFT)** technique.

Full model-oda parameters ellathayum update pannaama, small set of additional trainable parameters use panni model-a adapt pannum.

### Full Fine-Tuning vs LoRA

    Full Fine-Tuning
    → Model weights update
    → More GPU memory
    → More expensive

    LoRA
    → Base model mostly frozen
    → Small adapter parameters trained
    → Less memory
    → Cheaper

---

# 3. Pre-training

### Definition

**Pre-training** is the large-scale process of training a neural network from its initial state using massive datasets so that it learns general language and world patterns.

Simple-ah:

> Oru AI model-a basic level-la irundhu train panni, general knowledge and language patterns learn panna vaikkaradhu dhaan Pre-training.

### Basic Process

    Massive Dataset
           ↓
      Data Cleaning
           ↓
       Tokenization
           ↓
          Tokens
           ↓
    Transformer Model
           ↓
       GPU / TPU
           ↓
       Training
           ↓
     Pre-trained LLM

### Example

Model-ku:

    "The capital of France is ___"

nu kudutha:

    Paris

nu predict panna kathukkum.

Large-scale training-la billions/trillions of tokens use pannitu language patterns, relationships, reasoning-related capabilities etc. learn pannum.

---

# RAG vs Fine-Tuning vs Pre-training

| Feature | RAG | Fine-Tuning | Pre-training |
|---|---|---|---|
| Existing model use? | Yes | Yes | No |
| Model weights change? | No | Yes | Yes |
| External data at runtime? | Yes | Usually No | No |
| Main purpose | Knowledge retrieval | Behavior / task adaptation | General model learning |
| Training required? | No | Yes | Yes |
| Cost | Low | Medium | Extremely High |
| Difficulty | Easy | Medium / Hard | Very Hard |

---

# Simple Real-World Analogy

Imagine **LLM = Engineer**.

### Pre-training

Engineer-a school + college-la zero-la irundhu educate pannradhu.

    Zero knowledge
          ↓
    Education
          ↓
    General knowledge

---

### Fine-Tuning

Already knowledgeable engineer-ku specific company/process/technology training kudukkaradhu.

    Existing Engineer
          ↓
    Specialized Training
          ↓
    Specialized Engineer

---

### RAG

Engineer-ku retraining kudukkaama, office documents/manuals kuduthu, question varumbothu relevant document-a paathu answer panna solradhu.

    Engineer
       +
    Company Documents
       ↓
    Search relevant document
       ↓
    Answer

---

# Most Important Difference

## RAG ≠ Training

RAG use pannumbothu LLM usually learn/retrain aagathu.

Example:

    Gemini
       +
    Your College Database
       +
    Vector Database
       ↓
    RAG Application

User question varumbothu:

    User Question
          ↓
    Convert question to embedding
          ↓
    Similarity Search
          ↓
    Retrieve relevant data
          ↓
    Add data to context
          ↓
    Gemini
          ↓
    Answer

Tomorrow database-la new information add pannina:

    Old:
    Course A → HOD = Kumar

    New:
    Course A → HOD = Ravi

Database / vector index update pannina podhum.

Gemini-a retrain panna thevai illa.

---

# Important Architecture

RAG understand panna indha sequence romba important:

    LLM
     ↓
    Token
     ↓
    Transformer
     ↓
    Embedding
     ↓
    Vector
     ↓
    Vector Database
     ↓
    Similarity Search
     ↓
    Retrieval
     ↓
    Context
     ↓
    LLM
     ↓
    Answer

---

# Key Terminology — Quick Revision

**LLM**
→ Large Language Model.

**Token**
→ Text-ai model process panna use pannra basic units.

**Embedding**
→ Text/data-ai numerical vector representation-ah convert pannradhu.

**Vector**
→ Data-oda semantic representation in numerical form.

**Vector Database**
→ Vectors-a store, index, search panna use pannra database.

**Chunking**
→ Large documents-a smaller text sections-ah split pannradhu.

**Retrieval**
→ Query-ku relevant information-a search panni retrieve pannradhu.

**Augmentation**
→ Retrieved information-a LLM context-kulla add pannradhu.

**Generation**
→ LLM final response generate pannradhu.

**RAG**
→ Retrieval + Context + LLM Generation.

**Fine-Tuning**
→ Existing model-a task/behavior-specific dataset-la additional training pannradhu.

**LoRA**
→ Parameter-Efficient Fine-Tuning technique.

**Pre-training**
→ Massive datasets use panni model-ai general capabilities learn panna train pannradhu.

**Inference**
→ Trained model-ai use panni actual user input-ku output generate pannradhu.

---

# One-Line Memory Trick

    PRE-TRAINING
    = Brain create & general knowledge learn

    FINE-TUNING
    = Existing brain-ku specialization training

    RAG
    = Brain-ku external reference book provide pannradhu