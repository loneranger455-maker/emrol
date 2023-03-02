import json
def ImageCompressor():
    pass

def dict2obj(dict1):
    print(dict1)
    response=json.loads(json.dumps(dict1), object_hook=obj)
    print(response)
    return response