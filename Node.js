export const generateText = async () => {
	const url = "https://jp-tok.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
	const headers = {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": "Bearer YOUR_ACCESS_TOKEN"
	};
	const body = {
		input: "tell me about India..\n",
		parameters: {
			decoding_method: "greedy",
			max_new_tokens: 400,
			min_new_tokens: 0,
			stop_sequences: [],
			repetition_penalty: 1
		},
		model_id: "meta-llama/llama-2-70b-chat",
		project_id: "bc412d34-7abe-428a-b014-6ac238c94a61",
		moderations: {
			hap: {
				input: {
					enabled: true,
					threshold: 0.5,
					mask: {
						remove_entity_value: true
					}
				},
				output: {
					enabled: true,
					threshold: 0.5,
					mask: {
						remove_entity_value: true
					}
				}
			}
		}
	};

	const response = await fetch(url, {
		headers,
		method: "POST",
		body: JSON.stringify(body)
	});

	if (!response.ok) {
		throw new Error("Non-200 response");
	}

	return await response.json();
}
