ATLAS_URI = "mongodb+srv://yasraj:yasraj1234@personalprojects.fbdyv.mongodb.net/?retryWrites=true&w=majority"
import pymongo

client = pymongo.MongoClient(ATLAS_URI)
mydb = client["PersonalProjects"]
mycollection = mydb["interactions"]


mycollection.create_index([("Drug_A", pymongo.ASCENDING), ("Drug_B", pymongo.ASCENDING)], name="interaction_index")

import pandas as pd
data = pd.read_csv("D:/Projects/ddinter-main/ddinterpy/ddinter_downloads_code_A.csv")
data_dict = data.to_dict(orient="records")

mycollection.insert_many(data_dict)