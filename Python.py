import requests

url = "https://jp-tok.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29"

body = {
	"input": """tell me about India..
""",
	"parameters": {
		"decoding_method": "greedy",
		"max_new_tokens": 400,
		"repetition_penalty": 1
	},
	"model_id": "meta-llama/llama-2-70b-chat",
	"project_id": "bc412d34-7abe-428a-b014-6ac238c94a61",
	"moderations": {
		"hap": {
			"input": {
				"enabled": True,
				"threshold": 0.5,
				"mask": {
					"remove_entity_value": True
				}
			},
			"output": {
				"enabled": True,
				"threshold": 0.5,
				"mask": {
					"remove_entity_value": True
				}
			}
		}
	}
}

headers = {
	"Accept": "application/json",
	"Content-Type": "application/json",
	"Authorization": "Bearer YOUR_ACCESS_TOKEN"
}

response = requests.post(
	url,
	headers=headers,
	json=body
)

if response.status_code != 200:
	raise Exception("Non-200 response: " + str(response.text))

data = response.json()
