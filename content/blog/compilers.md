---
external: false
draft: false
title: "⚙️ Compilers, LLVM, MLIR, and the Journey to xDSL (Part 1)"
description: "A brief history of compilation tooling, LLVM, MLIR, Domain-Specific Languages, and an introduction to the xDSL framework."
ai_generated: true
date: 2026-03-24
---

![Compilers, LLVM, MLIR, and the Journey to xDSL post cover](/images/blog/compilers_cover_1200*627.jpeg)

## 📖 Introduction

This is the first post in a series exploring modern compiler infrastructure. 

In this article, we'll cover:
- A brief history of compilation and why we need it.
- The evolution of LLVM and MLIR.
- What Domain-Specific Languages (DSLs) actually are.
- How the **xDSL** framework bridges the gap between Python and powerful compiler technologies.
- Essential structural concepts and a sneak peek at the Toy language.

---

## 🕰️ A Brief History of Compilation: Why We Need It

Fundamentally, processors only execute binary machine code (1s and 0s). Because humans struggle to write or maintain complex logic in native binary or assembly, high-level programming languages were invented to provide human-readable abstractions. 

Compilers serve as the critical bridge, translating these high-level languages into optimised executable machine instructions (a core **compiler-level concept**). 

Early compilers were typically built as monolithic systems. They tightly coupled the parsing of a specific language to the generation of code for a specific hardware architecture. This approach made reusing compiler logic extremely difficult.

---

## 🚀 The Evolution of Compiler Tooling: LLVM and MLIR

As the hardware landscape diversified and new programming languages emerged, writing monolithic compilers became unsustainable. 

- **LLVM (circa 2003):** Introduced a highly modular architecture centralised around an Intermediate Representation (IR). A compiler's "front-end" turns code into standardised LLVM IR, and a "back-end" compiles that IR into specific hardware code. This unlocks massive reusability. LLVM IR is an **LLVM-specific concept**, though the notion of an IR broadly is an underlying compiler-level concept.
- **MLIR (circa 2019):** Multi-Level Intermediate Representation (MLIR) was born to address the rise of specialised hardware (like TPUs and GPUs) and AI tasks where LLVM IR was simply too low-level. MLIR allows developers to define custom, reusable IRs at multiple levels of abstraction. While MLIR relies on LLVM for its backend infrastructure, its multi-level abstraction is purely an **MLIR-specific** innovation.

---

## 🎯 What is a Domain-Specific Language (DSL)?

A Domain-Specific Language (a general **compiler-level concept**) is a specialised computer language tailored to a specific application domain, rather than a general-purpose language like C++ or Python. 

Familiar DSL examples include SQL for database queries, or Regular Expressions (Regex) for text matching. 

By restricting its scope, a DSL allows users to express complex domain-specific concepts clearly and concisely. More importantly, it empowers compilers to perform highly aggressive, domain-aware optimisations that would be nearly impossible to derive from general-purpose code.

---

## 🐍 The Journey of xDSL

While MLIR is a game-changer for building compiler infrastructure, it is inherently tied to the C++ ecosystem. This creates a steep learning curve, particularly encountering resistance in communities like data science and machine learning who rely heavily on Python. 

Here is where **xDSL** begins its journey. 

xDSL was created as a Python-based compiler framework that implements the core architecture and concepts of MLIR entirely in Python. By allowing developers to build and manipulate IRs, define dialects, and write compiler transformations without leaving the Python ecosystem, xDSL dramatically lowers the barrier to entry for rapid compiler prototyping and DSL creation. 

Note that xDSL is a reimagining of MLIR ideas. The structural concepts like Ops, Regions, and Blocks are entirely inherited from **MLIR**, but xDSL brings them into a native Python context. Writing programs using Python APIs (like `xdsl.ir`) is **xDSL-specific**.

---

## 🧱 Important Concepts: Op > Region > Block

Before using xDSL, you need to understand a few core structural primitives. These originated in **MLIR** and are adopted directly by xDSL. Their relationship forms a strict hierarchy: 

- **Op (Operation):** The fundamental, atomic unit of semantics in the IR. An operation can represent anything from an arithmetic addition (`AddOp`) to a high-level function call. Crucially, an Op can contain one or more Regions, allowing for nested structures.
- **Region:** A structural container owned by an Op. It holds a list of Blocks. Regions are used to represent nested scopes, such as the body of a conditional statement or a loop.
- **Block:** A linear sequence of Operations without any control flow branching in the middle. It executes sequentially from start to finish. A Block is contained within a Region.

👉 **Relationship Summary:** An **Op** can hold a **Region**, a **Region** holds a sequence of **Blocks**, and a **Block** holds a sequence of **Ops**.

---

## 🗂️ Important Concepts: Dialects and Passes

Beyond structure, we need ways to organise and modify our code. These are also **MLIR-originated concepts** implemented natively in Python by xDSL.

- **Dialect:** Think of this as a modular vocabulary. A dialect is a namespace that logically groups related Operations, Types, and Attributes together. For example, you might have an `arith` dialect for basic maths operations and a `tensor` dialect for multi-dimensional array operations. A compiler program can mix and match dialects within the same Module.
- **Pass:** A transformation applied to the IR. Passes traverse Operations to analyse them, optimise them, or "lower" them recursively from a high-level Dialect to a lower-level one. A typical compilation pipeline is simply an ordered series of Passes.

---

## ✨ Setting the Scene: The Toy Language

To see how these concepts come together in practice, the xDSL (and MLIR) tutorials revolve around a custom language called **Toy**. Toy is a simple, tensor-based language that looks like this:

```toy
def main() {
  # Define variables with implicit or explicit shapes
  var a = [[1, 2, 3], [4, 5, 6]];
  var b<3, 2> = [1, 2, 3, 4, 5, 6];

  # Built-in print instruction
  print(b);

  # Element-wise addition
  var c = a + b;
  print(c);
}
```

If we were to write a compiler for this:
1. `def main()` would become a **Region** attached to a function **Op**. 
2. The variables, math, and `print` statements would be **Ops** placed sequentially inside a **Block**. 
3. To make xDSL understand this code, we would define a whole new **Dialect** (the `toy` dialect) just to represent these specific operations!

### Conclusion
This concludes our theoretical introduction! In the next post of this series, we will get our hands dirty. We will take the Toy language above, define its custom dialect in xDSL, and build our own compiler passes to optimise and lower it. Stay tuned!
