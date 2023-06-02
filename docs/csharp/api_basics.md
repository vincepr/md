# Minimal Api compared to MVC

**MVC** - model-view-controller pattern. Is the old way of implementing apis in dotnet. Uses the controller model.

**Minimal APIs** - are architected to create HTTP apis with minimal dependencies. Ideal for microservices and apps that only include minimal files, features etc.

![mvs_vs_minimal_API](./mvc.svg)

## MVC
splits program logic into three interconected elements.

- **Model** - Defines data structure (ex. the Class that shapes the JSON the users consume)
- **View** - Display of data (UI)
- **Controller** - maps requests to actions (handles routes like "/api" and what logic to call when it gets hit)

## Minimal Api
Leightweight, so some features are not supported out of the box (compared to mvc).

like:
- no model validation
- no support for JSONPatch
- no support filters
- no support for custom model binding(IModelBinder)


# Project
## Setup (no VS, only vscode)
```
dotnet new webapi -minimal -n SixMinApi
code -r SixMinApi                               //-r to open in same instance

dotnet dev-certs https --trust                  // generate self signed certs for https
```