---
name: Static Web Deployment
description: Comprehensive guide for deploying modern React/Vite applications to static hosts like GitHub Pages with CI/CD.
---

# Static Web Deployment

This skill documents the optimized workflow for deploying frontend applications with environment-dependent features.

## GitHub Pages + Vite Workflow
1.  **Repository Setup**: Use the `base` property in `vite.config.ts` to match the GitHub repository name (e.g., `/PhonixQuest/`).
2.  **Secret Management**: 
    - Store API keys in GitHub Repository Secrets.
    - Map these secrets to environment variables in the GitHub Action YAML.
3.  **Vite Configuration**:
    ```typescript
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY)
    }
    ```

## deployment.yml Template
- **Node Environment**: Use Node 20+ with npm cache enabled.
- **Build Artifacts**: Ensure the `upload-pages-artifact` points to the correct build directory (`dist` for Vite).

## CI/CD Checklist
- [ ] Base URL correctly set.
- [ ] GEMINI_API_KEY added to repo secrets.
- [ ] Workflow file includes the `env` block in the build step.
- [ ] GitHub Pages settings set to "GitHub Actions" source.
