# OptimusAI JS SDK

## Overview
The **OptimusAI JS SDK** empowers developers to seamlessly interact with the Optimus AI API. In addition to simplifying request handling and AI-powered responses, our solution enables real-time monitoring of performance, costs, and usage. It also provides insights into qualitative and security metrics for both user inputs and LLM outputs, ensuring transparency and control.

## Installation
To install the SDK, use **npm** or **yarn**:

```sh
npm install optimus-ai-js
```

or

```sh
yarn add optimus-ai-js
```

## Usage
### Import and Initialize
To use the SDK, import the `OptimusAI` class and initialize it with your API key:

```typescript
import { OptimusAI } from "optimus-ai-js";

const optimus = new OptimusAI("your-api-key-here");
```

### Invoke an AI Deployment
To send a request to a specific AI deployment endpoint, use the `invoke` method:

```typescript
optimus.invoke("your-endpoint", {
  inputs: { message: "Hello, AI!" }
}).then(response => {
  console.log("AI Response:", response);
}).catch(error => {
  console.error("Error:", error);
});
```

## API Reference
### `OptimusAI`
#### Constructor
```typescript
constructor(apiKey: string)
```
- **apiKey** (*string*): Your Optimus AI API key. This is required.

#### Methods
##### `invoke(endpoint: string, input: Record<string, any>): Promise<T>`
Sends a request to the specified AI deployment endpoint.

- **endpoint** (*string*): The deployment endpoint to call.
- **input** (*Record<string, any>*): The JSON input payload for the request.
- **Returns:** A `Promise<T>` containing the AI response.

## Error Handling
If the API request fails, an error message is logged, and the error is thrown for further handling.

```typescript
optimus.invoke("invalid-endpoint", { inputs: { message: "Test" } })
  .catch(error => console.error("Request failed:", error));
```

## License
This SDK is licensed under the **Apache-2.0** license. See the `LICENSE` file for details.

## Contributing
Contributions are welcome! Please submit an issue or pull request in the [GitHub repository](https://github.com/cro-matic/optimus-ai-js/issues).

## Support
For any questions or issues, contact [hey@useoptimus.ai](mailto:hey@useoptimus.ai) or open a GitHub issue.

