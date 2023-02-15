import openai
from flask import Flask, request
from flask_cors import CORS

#imports OpenAI's library, requires installation (pip install openai)


def gpt3(code, comment):
    openai.api_key = #your OpenAI key
    response = openai.Completion.create(
        engine = "text-davinci-003",
        prompt = code + comment,
            temperature = 0.1,
            max_tokens = 4000,
            top_p = 1,
            frequency_penalty=0,
            presence_penalty=0
    )
    content = response.choices[0].text.split('.')
    #print(content)
    return response.choices[0].text
  
app = Flask(__name__)
CORS(app)

@app.route('/' ,methods = ['POST'])

def home():
    data = request.data

    #print(data)

    return gpt3(str(data), "add comments to given code(include code)")

if __name__ == '__main__':
  app.run(debug=True)
