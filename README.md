# Next.js 15 Server Component Async/Await Error in Client Component useEffect

This repository demonstrates a subtle bug that can occur when using server components with `async/await` inside a `useEffect` hook within a client component in Next.js 15. The problem arises from the asynchronous nature of server components and the timing of data access in the client component.

## Bug Description
The client component tries to access data fetched from a server component before it's fully resolved. This leads to undefined values or unhandled promise rejections, resulting in unpredictable behavior.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser's console or unexpected behavior in the UI.

## Solution
The solution involves proper error handling and ensuring the data from the server component is fully resolved before being used in the client component. This can involve using the `isLoading` state effectively and handling potential errors appropriately.