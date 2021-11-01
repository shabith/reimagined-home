## Notes
1. There were 112 vulnerabilities in the `client` project, and I have used `npm audit fix` to fix non-breaking changes.
2. Even though this is just a single page, I have used emotion theming to keep everything organized.
3. To enforce code styling, I have used prettier and prettier extensions in Visual Studio Code.
4. Added skeleton and error handling for better UX.
5. I have used [SWR Hook](https://swr.vercel.app/) along with [graphql-request](https://www.npmjs.com/package/graphql-request) to get graphql data.

## Known Issues
1. In Styled System flex direction(`flexDirection`) property was not working, so I had to use inline CSS to fix that.
