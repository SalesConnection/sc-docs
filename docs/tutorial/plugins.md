---
sidebar_label: 'Additional Plugins'
sidebar_position: 10
slug: plugins
---

# Additional Plugins

## Mermaid

This section describes some of [`mermaid`](https://mermaid.js.org/) plugin usage.

### Graph

````md {1} showLineNumbers
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
    D-->E;
```

### Gantt Chart

````md showLineNumbers
```mermaid
gantt
    title Gantt Chart
    dateFormat YYYY-MM-DD
    section Section A
        Task A  :a1, 2024-01-01, 5d
        Task B  :after a1, 4d
```
````

```mermaid
gantt
    title Gantt Chart
    dateFormat YYYY-MM-DD
    section Section A
        Task A  :a1, 2024-01-01, 5d
        Task B  :after a1, 4d
```

### User Journey

````md showLineNumbers
```mermaid
journey
    title Journey Title
    section Section A
        Do A: 9: Me
        Do B: 8: Me
        Do C: 9: Me, You
    section Section B
        Do D: 5: Me, You
```
````

```mermaid
journey
    title Journey Title
    section Section A
        Do A: 9: Me
        Do B: 8: Me
        Do C: 9: Me, You
    section Section B
        Do D: 5: Me, You
```

## KaTeX

```md show showLineNumbers
Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

$$
I = \int_0^{2\pi} \sin(x)\,dx
$$
```

Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

$$
I = \int_0^{2\pi} \sin(x)\,dx
$$
