const questions = [
  {
    question: "Infer which microorganism has affinity to lymph nodes of intestine ?",
    answers: [
      { text: " Sal.typhi ", correct: true },
      { text: "Sal.enteritidis ", correct: false },
      { text: "Sal.typhimirium ", correct: false },
      { text: "Vibrio cholera ", correct: false },
      { text: "Shigella flexneri", correct: false },
    ],
  },
  {
    question: "Infer what disease is characterized by splenomegaly, rose spots on the trunk in 25% of patients, nonproductive cough, constipation?",
    answers: [
      { text: "Typhoid fever ", correct: true },
      { text: "Epidemic Typhus ", correct: false },
      { text: "Meningitis ", correct: false },
      { text: "Encephalitis ", correct: false },
      { text: "Borreliosis", correct: false },
    ],
  },
  {
    question: "Identify ulceration of Peyer patches in the ileum leads to intestinal hemorrhage or perforation in the case of ....?",
    answers: [
      { text: "Typhoid fever ", correct: true },
      { text: "Amebiasis", correct: false },
      { text: "Shigellosis", correct: false },
      { text: "Helminthes ", correct: false },
      { text: "Paratyphoid B", correct: false },
    ],
  },
  {
    question: "The patient of 32 years on the 5th day of disease admitted to the district internist  with complaints for severe headache, general weakness, absence of appetite, sleeplessness, temperature increase to 39,0°C in the day of appeal for medical help. Physical examination: pale of skin. A tongue is coated by a greyish-white raid, imprints of teeth on sides. Pulse rate 78 min, PB 110/60 mm of Hg. Meteorism, painless. Liver enlarge on a 1,5-2 cm. Tenderness of muscles in the ileocecal area on palpation. Constipation during 2 days. Which tests of laboratory diagnostics do you use for the confirm Typhoid fever on this day? ",
    answers: [
      { text: " Blood culture ", correct: true },
      { text: " Widal test ", correct: false },
      { text: " Stool culture ", correct: false },
      { text: " Bile culture ", correct: false },
      { text: "Spinal culture ", correct: false },
    ],
  },
  {
    question: "Find the error in the following:  signs of intestinal bleeding in typhoid fever: ",
    answers: [
      { text: "Develops during the first week of illness ", correct: true },
      { text: " Short-term temperature decrease ", correct: false },
      { text: "Pale, tachycardia, hypotension", correct: false },
      { text: "Meteorism, melena ", correct: false },
      { text: "it occurs with a mild course of the disease", correct: false },
    ],
  },
  {
    question: "Find the error in the following: signs of intestinal wall  perforation in typhoid fever: ",
    answers: [
      { text: "Sudden painful cuttings in the intestines ", correct: true },
      { text: "Pain in the ileocecum of a permanent character. ", correct: false },
      { text: "Signs of peritoneal irritation in the ileocecal area ", correct: false },
      { text: "Pain or tenderness of muscles in the ileocecal area on palpation ", correct: false },
      { text: " Decreased blood pressure, tachycardia", correct: false },
    ],
  },
  {
    question: "A patient during a week had risen gradually temperature, appeared headache, general weakness, appetite decreased. He appealed to the doctor on the 8th day of disease. Physical examination: temperature 39,5°C, he gave short answers to the questions, skin pale, coated tongue and fuliginosus, BP is 100/60 mm Hg, pulse rates 74 in min. Meteorism, there are few rose spots on the skin of abdomen. Hepatosplenomegaly. Constipation. Select the diseases? ",
    answers: [
      { text: "Typhoid fever ", correct: true },
      { text: "Salmonellosis ", correct: false },
      { text: "E.coli ", correct: false },
      { text: "Food posoning", correct: false },
      { text: "Malaria ", correct: false },
    ],
  },
  {
    question: "A patient 36 years had disease during 3 weeks: gradual increase of temperature, from the 2th week of disease temperature purchased undulating character, decline of activity, headache and insomnia. He treated at home him-self from \"Cold\", but treatment was ineffective, and he was directed to the hospital. Physical examination: skin pale, adynamic, temperature 400?, fuliginous tongue, meteorism, tenderness of muscles in the ileocecal area on palpation. Liver enlarge on 2-3 cm. Spleen was palpated. In 2 days dizziness, sonitus, melena appeared after hospitalization. BP 70/40 mm Hg, pulse rate 120 in min, temperature sudden was decreased to norm. Which complication of Typhoid fever developed?",
    answers: [
      { text: "Intestinal bleeding ", correct: true },
      { text: " Spleen rupture  ", correct: false },
      { text: " Infectious-toxic shock ", correct: false },
      { text: " Perforation of the intestinal wall", correct: false },
      { text: "Meningitis ", correct: false },
    ],
  },
  {
    question: "Select the symptom that distinguish the generalized form of salmonellosis from the localized form.",
    answers: [
      { text: "Hepatosplenomegaly   3. 4. 5. ", correct: true },
      { text: "Abdominal pain", correct: false },
      { text: "Loose stools ", correct: false },
      { text: "Fever", correct: false },
      { text: "Vomiting ", correct: false },
    ],
  },
  {
    question: "Classify the generalized forms of Salmonellosis (non-typhoid): ",
    answers: [
      { text: "Typhoid, septicopyemia", correct: true },
      { text: "Meningitides ", correct: false },
      { text: "Colitis, hemocolitis", correct: false },
      { text: "1.    Gastratis, gastroenteratis", correct: false },
      { text: "Typical , atypical", correct: false },
    ],
  },
  {
    question: "Explain what is the solution uses for oral rehydration in salmonellosis ",
    answers: [
      { text: "glucose-saline solutions", correct: true },
      { text: "saline solutions", correct: false },
      { text: "alkaline solutions", correct: false },
      { text: "acid solutions", correct: false },
      { text: "glucose solutions", correct: false },
    ],
  },
  {
    question: "Explain the ways of transmission of gastroenteritis forms of salmonellosis: ",
    answers: [
      { text: " Fecal-oral ", correct: true },
      { text: "Vertical ", correct: false },
      { text: "Transmissible", correct: false },
      { text: "Sexual", correct: false },
      { text: "Airborne", correct: false },
    ],
  },
  {
    question: "Explain the leading symptom of food poisoning: ",
    answers: [
      { text: "Vomiting ,nausea ", correct: true },
      { text: "Prolonged fever", correct: false },
      { text: "Diarrhea , abdominal pain", correct: false },
      { text: "Spasm and soreness of the sigmoid colon ", correct: false },
      { text: "Diarrhea is replaced by constipation", correct: false },
    ],
  },
  {
    question: "Explain the main mechanism of pathogenesis of the generalized form in non typhoidal salmonella infection:",
    answers: [
      { text: " Prolonged bacteremia and endotoxinemia ", correct: true },
      { text: "Development of dehydration shock ", correct: false },
      { text: "Activation of adenylcyclase", correct: false },
      { text: "Violation of functional adaptive processes ", correct: false },
      { text: "Development of acidosis", correct: false },
    ],
  },
  {
    question: "A man of 24 years old after eating dried pickle in few hours he had nausea, vomiting, severe abdominal pain with diarrhea and sub febrile temperature. By physical examination were noticed the pain around the umbilical. In blood were noticed increase neutrophil count and ESR. The stool had greenish color. Select the diseases? ",
    answers: [
      { text: "Salmonellosis ", correct: true },
      { text: "Typhoid fever ", correct: false },
      { text: "Shigellosis ", correct: false },
      { text: "E.coli ", correct: false },
      { text: " Amoebiasis", correct: false },
    ],
  },
  {
    question: "The 14 students were admitted to the infectious hospital during 1 day. All patients had similar symptoms: nausea, vomiting, pain in stomach with frequent watery diarrhea. 10 patients had low BP and convulsions of the legs. All patients had curds and sour cream in café for breakfast. Select the diseases? ",
    answers: [
      { text: "Salmonellosis ", correct: true },
      { text: " Cholera ", correct: false },
      { text: "Shigellosis", correct: false },
      { text: " Botulism ", correct: false },
      { text: "Typhoid fever ", correct: false },
    ],
  },
  {
    question: "A boy of 15 years old is being ill for 3 days, Tempreture is 38°C. His complains are: abdominal pain, vomiting 2 times, frequent stool with greenish color, imperative feeling of defecation. Select the diseases? ",
    answers: [
      { text: "Salmonellosis ", correct: true },
      { text: "Food poisoning ", correct: false },
      { text: "Pseudotuberculosis ", correct: false },
      { text: "Dysentery ", correct: false },
      { text: " Botulism ", correct: false },
    ],
  },
  {
    question: "Infer the material which shoud be used for detection of the pathogen in asymptomatic form of Salmonellosis: ",
    answers: [
      { text: "Stool", correct: true },
      { text: "Vomit and wash water ", correct: false },
      { text: "Blood", correct: false },
      { text: " Bile ", correct: false },
      { text: "Spinal fluids", correct: false },
    ],
  },
  {
    question: "Show the error: shigella is transmitted through the following factors: ",
    answers: [
      { text: "Contaminated dust", correct: true },
      { text: "Foods, articles of way of life ", correct: false },
      { text: "Poor hygiene ", correct: false },
      { text: "Unwashed fruit ", correct: false },
      { text: "Raw water", correct: false },
    ],
  },
  {
    question: "Explain in what part of gastrointestinal tract is localized the lesions of dysentery: ",
    answers: [
      { text: "Distal parts of large intestine ", correct: true },
      { text: "Stomach", correct: false },
      { text: "Small intestine", correct: false },
      { text: "Proximal parts of large intestine ", correct: false },
      { text: "Cecum", correct: false },
    ],
  },
  {
    question: "Find out the mistake: all the following statement about shigellosis is true: ",
    answers: [
      { text: "Constipation ", correct: true },
      { text: " Incubation period in average 12-26 days ", correct: false },
      { text: " Fecal-oral route of transmission ", correct: false },
      { text: " Rectal prolapsed is one the most common complication ", correct: false },
      { text: "Inflammation of the sigmoid colon", correct: false },
    ],
  },
  {
    question: "Explain what is the basis of the pathogenesis of escherichiosis caused by enteroadhesive Escherichia",
    answers: [
      { text: "attachment to epithelial cells, stimulation of mucus production", correct: true },
      { text: "destruction of endothelial cells of small blood vessels of the intestinal wall ", correct: false },
      { text: "increased activity of adenylate cyclase and guanylate cyclase by enterotoxins", correct: false },
      { text: "the development of an inflammatory reaction, increased intake of endotoxins into the blood", correct: false },
      { text: "increased synthesis of cAMP", correct: false },
    ],
  },
  {
    question: "Find the error: a patient with acute dysentery is assigned a checkup",
    answers: [
      { text: "Culture of blood ", correct: true },
      { text: "  General blood analysis ", correct: false },
      { text: " Culture of stool ", correct: false },
      { text: " Serology test ", correct: false },
      { text: " Sigmoidoscopy", correct: false },
    ],
  },
  {
    question: "The patient S, 20 years old, admitted to hospital on 3rd day of disease with complains on fever and diarrhea, temperature 39 C, loss appetite, nausea, weakness, abdominal pain, watery diarrhea, which rapidly becomes bloody. Tenesmus,   abdominal pain, cramping sigmoid intestine. Select the diseases? ",
    answers: [
      { text: "Shigellosis", correct: true },
      { text: "Food poisoning", correct: false },
      { text: "Salmonellosis ", correct: false },
      { text: "Pseudotuberculosis ", correct: false },
      { text: "Typhoid fever ", correct: false },
    ],
  },
  {
    question: "A 17-year-old male was transferred to hospital from an outside hospital with a 4-day history of bloody diarrhea, thrombocytopenia, anemia, and elevated blood urea nitrogen and creatinine with concern for hemolytic uremic syndrome (HUS). On admission, significant laboratory findings supporting a diagnosis of HUS included the following: hemoglobin 10.5 g/dL, platelets 45 × 109/L, BUN 43 mg/dL, creatinine 2.46 mg/dL, stool culture grew out E coli O157:H7, classifying his case as typical HUS, although Shiga 1 and 2 toxins were not detected. Select the diseases? ",
    answers: [
      { text: " Escherichiosis", correct: true },
      { text: "Food poisoning", correct: false },
      { text: "Salmonellosis ", correct: false },
      { text: "Typhoid fever ", correct: false },
      { text: "Shigellosis", correct: false },
    ],
  },
  {
    question: "An 16year old patient was admitted to the hospital with edema and high blood pressure. He had been well until 8 days prior to admission when he developed severe abdominal  pain, nausea, vomiting and diarrhea. On the second day the diarrhea became bloody. The diarrhea continued but had lessened in amount, remaining bloody. The mother did not report any fever. On examination he appeared pale and had mild facial edema. Temperature was 37.6'C pulse 104 and regular and the blood pressure was 140/95.  His abdomen was tender. Chest x-ray was clear. Abdominal x-ray disclosed edema of the transverse and descending colon with thumbprinting. Select the diseases? ",
    answers: [
      { text: "Escherichiosis", correct: true },
      { text: "Food poisoning", correct: false },
      { text: "Salmonellosis", correct: false },
      { text: "Typhoid fever ", correct: false },
      { text: "Shigellosis", correct: false },
    ],
  },
  {
    question: "Explain what helminthiasis is characterized by the development of muscle syndrome?",
    answers: [
      { text: "trichenellosis", correct: true },
      { text: "giardiasis", correct: false },
      { text: "toxocariasis", correct: false },
      { text: "opisthorchiasis", correct: false },
      { text: "ascariasis.", correct: false },
    ],
  },
  {
    question: "Explain what stage of development of helminthiasis is characterized by febrile syndrome?",
    answers: [
      { text: "acute", correct: true },
      { text: "chronic", correct: false },
      { text: "subacute", correct: false },
      { text: "larval", correct: false },
      { text: "sexually mature", correct: false },
    ],
  },
  {
    question: "Conclude what neurological syndromes occur with helminthiasis?",
    answers: [
      { text: "there are no specific neurological signs in helminthiasis", correct: true },
      { text: "encephalopathy", correct: false },
      { text: "osteochondrosis", correct: false },
      { text: "neuralgia", correct: false },
      { text: "radiculitis", correct: false },
    ],
  },
  {
    question: "Explain into what two groups parasitic diseases are classified?",
    answers: [
      { text: "helminthiasis and protozoosis", correct: true },
      { text: "larval helminthiasis and protozoa", correct: false },
      { text: "trematodes and giardiasis", correct: false },
      { text: "nematodes and cestodes", correct: false },
      { text: "rematodes and helminthiases", correct: false },
    ],
  },
  {
    question: "Conclude when to repeat the course of therapy if there is no effect from the treatment of enterobiasis?",
    answers: [
      { text: "2 weeks", correct: true },
      { text: "4 weeks", correct: false },
      { text: "3weeks", correct: false },
      { text: "1 week", correct: false },
      { text: "5 weeks", correct: false },
    ],
  },
  {
    question: "Explain the extra-intestinal complications of enterobiosis ",
    answers: [
      { text: "vulvovaginitis", correct: true },
      { text: "appendicitis", correct: false },
      { text: "sphincteritis", correct: false },
      { text: "typhlitis", correct: false },
      { text: "peritonitis", correct: false },
    ],
  },
  {
    question: "Explain what method is used for laboratory diagnosis of enterobiosis?",
    answers: [
      { text: "microscopic", correct: true },
      { text: "molecular genetic", correct: false },
      { text: "serological", correct: false },
      { text: "immunological", correct: false },
      { text: "allergic", correct: false },
    ],
  },
  {
    question: "Explain the intestinal complication of enterobiasis",
    answers: [
      { text: "typhilitis", correct: true },
      { text: "vulvovaginitis", correct: false },
      { text: "neurodermatitis", correct: false },
      { text: "eczema", correct: false },
      { text: "appendicitis", correct: false },
    ],
  },
  {
    question: "Explain when repeated single doses of etiotropic drugs are taken for enterobiasis?",
    answers: [
      { text: "2 weeks", correct: true },
      { text: "1 week", correct: false },
      { text: "4 weeks", correct: false },
      { text: "2 days", correct: false },
      { text: "5 weeks", correct: false },
    ],
  },
  {
    question: "Conclude what are the characteristic changes in the general blood test for enterobiosis?",
    answers: [
      { text: "eosinophilia", correct: true },
      { text: "leukopenia", correct: false },
      { text: "lymphocytosis", correct: false },
      { text: "leukocytosis", correct: false },
      { text: "thrombocytopenia", correct: false },
    ],
  },
  {
    question: "Give an example of the most typical variant of the pre-icteric period of HAV:",
    answers: [
      { text: "Flu-like ", correct: true },
      { text: "Dyspeptic", correct: false },
      { text: "Asthenic", correct: false },
      { text: "Abdominal", correct: false },
      { text: "Arthralgic", correct: false },
    ],
  },
  {
    question: "Choose which serological marker can be detected in the acute period of hepatitis A?",
    answers: [
      { text: "Anti-HAV IgM", correct: true },
      { text: "HBsAg", correct: false },
      { text: "Anti-Hbcore IgM", correct: false },
      { text: "Anti-HCV IgM", correct: false },
      { text: "Anti-HBsAgD", correct: false },
    ],
  },
  {
    question: "Distinguish which family the causative agent of viral hepatitis A belongs to:",
    answers: [
      { text: "Picornavirus", correct: true },
      { text: "Delta virus.", correct: false },
      { text: "Аrbovirus", correct: false },
      { text: "Сytomegalovirus", correct: false },
      { text: "Retrovirus", correct: false },
    ],
  },
  {
    question: "According to which of the analyzes can hepatitis A be assumed in the pre-icteric period:",
    answers: [
      { text: " Enzymes ALT, AST", correct: true },
      { text: "Total bilirubin", correct: false },
      { text: " Protein fractions of blood", correct: false },
      { text: "Alkaline phosphatase", correct: false },
      { text: "General blood testC", correct: false },
    ],
  },
  {
    question: "Distinguish the main transmission pathway for viral hepatitis E from viral hepatitis A:",
    answers: [
      { text: "Сontaminated water", correct: true },
      { text: "Сontaminated food", correct: false },
      { text: "Household contact", correct: false },
      { text: "Hemocontact", correct: false },
      { text: "Transmissible", correct: false },
    ],
  },
  {
    question: " Highlight the duration of the incubation period of HEV:",
    answers: [
      { text: " 3-8 weeks", correct: true },
      { text: "5-6 days", correct: false },
      { text: "1-2 weeks", correct: false },
      { text: "5-6 months", correct: false },
      { text: "more than 6 months", correct: false },
    ],
  },
  {
    question: "Choose the duration of the icteric period for CAA:",
    answers: [
      { text: "10-12 days", correct: true },
      { text: "1-7 days", correct: false },
      { text: "3-4 weeks", correct: false },
      { text: "14-30 days", correct: false },
      { text: ">1 month.", correct: false },
    ],
  },
  {
    question: "Estimate the duration of the pre- icteric period in HAV:",
    answers: [
      { text: "	4-7 days", correct: true },
      { text: "1-3 days", correct: false },
      { text: "8-14 days", correct: false },
      { text: "15-16 days ", correct: false },
      { text: "	17-18 days", correct: false },
    ],
  },
  {
    question: "A 17-year-old patient went to the doctor complaining of jaundice of the skin and sclera, dark urine.  In the epidemiological history: He denies parenteral interventions over the past 6 months, his 10-year-old younger brother recently fell ill with a similar disease. Objectively: the liver is enlarged by 2.0 centimeters. Total bilirubin - 140 mmol/l, direct bilirubin - 105 mmol / l, thymol sample -19 units.   Choose a preliminary diagnosis?",
    answers: [
      { text: "Viral hepatitis A", correct: true },
      { text: "Viral hepatitis B", correct: false },
      { text: "Viral hepatitis C", correct: false },
      { text: "Viral hepatitis D", correct: false },
      { text: "Viral hepatitis Е", correct: false },
    ],
  },
  {
    question: "Select the main outcome of acute hepatitis A:",
    answers: [
      { text: "Recovery", correct: true },
      { text: " Lightning liver failure", correct: false },
      { text: " Cirrhosis of the liver", correct: false },
      { text: "Chronic hepatitis", correct: false },
      { text: "Transition to chronicling", correct: false },
    ],
  },
  {
    question: "Choose what is unusual for liver damage in acute viral hepatitis A?",
    answers: [
      { text: "	Сytolytic syndrome", correct: true },
      { text: "Liver parenchyma fibrosis", correct: false },
      { text: "Cholestatic syndrome", correct: false },
      { text: "Mesenchymal inflammatory syndrome", correct: false },
      { text: "The development of fibrosis", correct: false },
    ],
  },
  {
    question: "Complete the statement: the main type of treatment for a mild form of viral hepatitis A is ...",
    answers: [
      { text: "Compliance with the regime and diet", correct: true },
      { text: "The use of hepatoprotectors", correct: false },
      { text: "Infusion therapy", correct: false },
      { text: "Enzyme preparations", correct: false },
      { text: "Glucocorticoid therapy", correct: false },
    ],
  },
  {
    question: "The young man has unexpressed jaundice of the skin and sclera, no symptoms of intoxication, a moderate increase in the level of direct bilirubin and transaminase activity. The pre-jaundice period was not pronounced, only weakness was noted. Identify the most likely viral hepatitis:",
    answers: [
      { text: "HCV", correct: true },
      { text: "HAV", correct: false },
      { text: "HEV", correct: false },
      { text: "HBV", correct: false },
      { text: "HDV", correct: false },
    ],
  },
  {
    question: "Specify the level of bilirubin in mild forms of viral hepatitis:",
    answers: [
      { text: "Up to 85 mmol/l", correct: true },
      { text: "Up to 20.5 mmol/l", correct: false },
      { text: "From 85 to 200 mmol/l", correct: false },
      { text: "Over 200 mmol/l", correct: false },
      { text: "All answers are correct", correct: false },
    ],
  },
  {
    question: "Explain what is the reason for the predominant chronic course of HCV:",
    answers: [
      { text: "Mutation of the virus genome", correct: true },
      { text: "Weak immune response", correct: false },
      { text: "The presence of different genotypes", correct: false },
      { text: "Extrahepatic lesions", correct: false },
      { text: "Fatty degeneration", correct: false },
    ],
  },
  {
    question: "Give an example of the most common clinical form of acute HCV:",
    answers: [
      { text: "Asymptomatic", correct: true },
      { text: "Jaundice", correct: false },
      { text: "Fulminant", correct: false },
      { text: "Cholestatic", correct: false },
      { text: "Heartless", correct: false },
    ],
  },
  {
    question: "Delta hepatitis virus needs support to be able to replicate:",
    answers: [
      { text: "Hepadnaviruses", correct: true },
      { text: "Enteroviruses", correct: false },
      { text: "Mixoviruses", correct: false },
      { text: "Caliciviruses", correct: false },
      { text: "Flaviviruses", correct: false },
    ],
  },
  {
    question: "Select the examination method used to confirm the diagnosis of acute HDV:",
    answers: [
      { text: "ELISA", correct: true },
      { text: "Ultrasound of the liver", correct: false },
      { text: "Puncture biopsy of the liver", correct: false },
      { text: "Biochemical blood analysis", correct: false },
      { text: "Blood test ", correct: false },
    ],
  },
  {
    question: "Give an example of markers of hepatitis D co-infection:",
    answers: [
      { text: "HBs Ag, AntiHBcor IgM, AntiHDV IgM", correct: true },
      { text: "HBs Ag, AntiHBcor IgG, AntiHDV IgM", correct: false },
      { text: "AntiHBs, AntiHDV IgM", correct: false },
      { text: "AntiHBcor IgM, AntiHDV IgM", correct: false },
      { text: "AntiHDV IgM", correct: false },
    ],
  },
  {
    question: "Highlight which of the listed variants of the pre-jaundice period is NOT characteristic of hepatitis B:",
    answers: [
      { text: "Catarrhal", correct: true },
      { text: "Arthralgic", correct: false },
      { text: "Dyspeptic", correct: false },
      { text: "Astheno-vegetative", correct: false },
      { text: "Mixed", correct: false },
    ],
  },
  {
    question: "Choose which of the biochemical parameters is most important for assessing the severity of viral hepatitis:",
    answers: [
      { text: "Increased bilirubin", correct: true },
      { text: "Increased transaminases", correct: false },
      { text: "Increased thymol test", correct: false },
      { text: "Increased cholesterol", correct: false },
      { text: "All answers are correct", correct: false },
    ],
  },
  {
    question: "Select the features characteristic of viral hepatitis D:",
    answers: [
      { text: "With the appearance of jaundice, intoxication increases", correct: true },
      { text: "Mild forms are more common", correct: false },
      { text: "With the appearance of jaundice, intoxication decreases", correct: false },
      { text: "Mostly children under one year old are ill", correct: false },
      { text: "Erased, jaundiced forms are more common.", correct: false },
    ],
  },
  {
    question: "Select the epidemiological features of hepatitis B:",
    answers: [
      { text: "Lack of seasonality of the disease", correct: true },
      { text: "Contact with a hepatitis patient", correct: false },
      { text: "Short incubation period", correct: false },
      { text: "Contact with animals", correct: false },
      { text: "Violation of sanitary and hygienic regime", correct: false },
    ],
  },
  {
    question: "Determine which laboratory examination methods make it possible to diagnose viral hepatitis in the pre-jaundice period:",
    answers: [
      { text: "Increased AlT", correct: true },
      { text: "Increased protein", correct: false },
      { text: "Increased thymol test", correct: false },
      { text: "Increased cholesterol", correct: false },
      { text: "Decrease in the prothrombin index", correct: false },
    ],
  },
  {
    question: "Choose the duration of the incubation period for viral hepatitis B:",
    answers: [
      { text: "2-6 months.", correct: true },
      { text: "2 -7 days", correct: false },
      { text: "7 -14 days", correct: false },
      { text: "14 -21 days", correct: false },
      { text: "14 -45 days.", correct: false },
    ],
  },
  {
    question: "Choose the level of bilirubin in severe forms of viral hepatitis:",
    answers: [
      { text: "Over 200 mmol/l", correct: true },
      { text: "Up to 20.5 mmol/ l", correct: false },
      { text: "Up to 85 mmol/ l", correct: false },
      { text: "From 85 to 200 mmol/l", correct: false },
      { text: "All the answers are correct", correct: false },
    ],
  },
  {
    question: "Specify what contains the HIV virus:",
    answers: [
      { text: "Revertase", correct: true },
      { text: "DNA", correct: false },
      { text: "Neuromyxodase", correct: false },
      { text: "Hemagglutinin", correct: false },
      { text: "Coagulase", correct: false },
    ],
  },
  {
    question: "Specify which subpopulations of T lymphocytes the pathogen of HIV infection is related to:",
    answers: [
      { text: "T-helpers", correct: true },
      { text: "T-suppressors", correct: false },
      { text: "T-killers", correct: false },
      { text: "Macrophages", correct: false },
      { text: "White blood cells", correct: false },
    ],
  },
  {
    question: "What is the primary immune response immunoglobulins?",
    answers: [
      { text: "Ig G", correct: true },
      { text: "Ig A", correct: false },
      { text: "Ig M", correct: false },
      { text: "Ig E", correct: false },
      { text: "Ig D", correct: false },
    ],
  },
  {
    question: "What drug causes Nephrotoxicity?",
    answers: [
      { text: "Tenofovir", correct: true },
      { text: "Ralteglavir", correct: false },
      { text: "Lamivudine", correct: false },
      { text: "Efavirenz", correct: false },
      { text: "Zidovudine", correct: false },
    ],
  },
  {
    question: "A man, 30 years old, turned to the AIDS center for advice. It turned out from the survey that the man works as a surgeon in a regional hospital, 2 days ago he performed a hernia operation, pricked his finger during the suturing of the wound. The patient and the doctor underwent rapid HIV testing. The patient's result was positive. The consultant conducted a conversation with the applicant, assigned the man a course of post-exposure prophylaxis and a number of HIV tests. After what period of time should HIV testing be repeated?",
    answers: [
      { text: "6 months", correct: true },
      { text: "1 month", correct: false },
      { text: "3 months", correct: false },
      { text: "8 months", correct: false },
      { text: "12 months", correct: false },
    ],
  },
  {
    question: "What class of ART includes Tenofovir?",
    answers: [
      { text: "NtRTI -  nucleotid reverse transcriptase inhibitors", correct: true },
      { text: "NNRTI – non-nucleoside reverse transcriptase inhibitors", correct: false },
      { text: "Integrase Inhibitors", correct: false },
      { text: "Protease inhibitors", correct: false },
      { text: "Fusion inhibitors", correct: false },
    ],
  },
  {
    question: "Which vitamin should be added in the treatment of children infected with HIV?",
    answers: [
      { text: "Vitamin D", correct: true },
      { text: "Vitamin A", correct: false },
      { text: "Vitamins B", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin E", correct: false },
    ],
  },
  {
    question: "A 40-year-old woman went to a doctor about oral candidiasis. From anamnesis, he is registered for HIV infection and receives antiretroviral therapy. But he periodically gives up treatment. Examination reveals redness and inflammation of the mucous membrane with or without white plaques; the tongue turns red, the papillae are smoothed. Should this patient be treated for an opportunistic infection?",
    answers: [
      { text: "Fluconazole", correct: true },
      { text: "Metronidazole", correct: false },
      { text: "Ceftriaxone", correct: false },
      { text: "Tinidazole", correct: false },
      { text: "Amphotericin B", correct: false },
    ],
  },
  {
    question: "Specify which clinical manifestations do not occur in stage 2 of HIV infection:",
    answers: [
      { text: "Benign lymphoreticulosis", correct: true },
      { text: "Weight loss", correct: false },
      { text: "Chronic nonspecific lung diseases", correct: false },
      { text: "Superficial bacterial and fungal lesions of the skin and mucous membranes", correct: false },
      { text: "Kaposi's sarcoma", correct: false },
    ],
  },
  {
    question: "Highlight diseases that are not an HIV indicator:",
    answers: [
      { text: "Frequently recurrent erysipelas", correct: true },
      { text: "Hairy leukoplakia", correct: false },
      { text: "Seborrheic dermatitis", correct: false },
      { text: "Private herpes zoster", correct: false },
      { text: "Candidiasis esophagitis", correct: false },
    ],
  },
  {
    question: "Patient Z., 29 years old, arrived from Nigeria a year ago. For 6 months, he experiences weakness, malaise, fever up to 37.5 ° C, periodically notes the appearance of a rash on the body, daily loose stools up to 10 times a day. Weight loss over 10 kg. The cervical and axillary nodes are enlarged. Choose a presumptive diagnosis. ",
    answers: [
      { text: "HIV infection ", correct: true },
      { text: "Lassa Fever ", correct: false },
      { text: "Legionnaires' disease ", correct: false },
      { text: "Brucellosis ", correct: false },
      { text: "Lymphogranulomatosis", correct: false },
    ],
  },
  {
    question: "Choose the clinical signs for which an HIV test is indicated:",
    answers: [
      { text: "Unexplained weight loss", correct: true },
      { text: "Dry cough", correct: false },
      { text: "Weakness, lethargy", correct: false },
      { text: "Urticaria", correct: false },
      { text: "Joint pain", correct: false },
    ],
  },
  {
    question: "Select the following is Not a common mode of HIV transmission?",
    answers: [
      { text: "Eating contaminated food ", correct: true },
      { text: "Unprotected sexual intercourse ", correct: false },
      { text: "Sharing needles or syringes ", correct: false },
      { text: "Casual contact like hugging or shaking hands ", correct: false },
      { text: "Mother to child transmission during childbirth or breastfeeding ", correct: false },
    ],
  },
  {
    question: "Choose a term that is used to describe the stage of HIV infection when the virus is not detected in the blood due to effective treatment?",
    answers: [
      { text: "The phase of viral suppression", correct: true },
      { text: "HIV-negative phase", correct: false },
      { text: "The remission phase", correct: false },
      { text: "Asymptomatic phase", correct: false },
      { text: "The latent phase", correct: false },
    ],
  },
  {
    question: "Explain what is the name of the process by which the virus becomes resistant to antiretroviral drugs?",
    answers: [
      { text: "Viral mutation", correct: true },
      { text: "Adaptation to antiviral drugs", correct: false },
      { text: "Drug tolerance", correct: false },
      { text: "Ineffectiveness of treatment", correct: false },
      { text: "Immune response", correct: false },
    ],
  },
  {
    question: "Suppose what is the average life expectancy of people diagnosed with HIV who receive appropriate treatment?",
    answers: [
      { text: "Comparable to the total duration", correct: true },
      { text: "    Less than 5 years", correct: false },
      { text: "5-10 years", correct: false },
      { text: "10-20 years", correct: false },
      { text: "20-30 years old", correct: false },
    ],
  },
  {
    question: "Can you Select the expected result for an HIV-infected person who behaves riskily and does not seek medical help?",
    answers: [
      { text: "Stable progression of the disease", correct: true },
      { text: "Complete suppression of the virus", correct: false },
      { text: "Spontaneous healing", correct: false },
      { text: "Increased risk of opportunistic infections and mortality", correct: false },
      { text: "Strengthening the immune system", correct: false },
    ],
  },
  {
    question: "Evaluate how the term AIDS is defined:",
    answers: [
      { text: "The final stage of HIV infection", correct: true },
      { text: "The initial stage of HIV infection", correct: false },
      { text: "The stage of primary HIV infection", correct: false },
      { text: "The stage of secondary diseases in HIV infection", correct: false },
      { text: "The window period", correct: false },
    ],
  },
  {
    question: "Give an example of which of the following viruses causes bronchiolitis:",
    answers: [
      { text: "Respiratory syncytial virus", correct: true },
      { text: "Human immunodeficiency virus", correct: false },
      { text: "Human papillomavirus", correct: false },
      { text: " Epstein Barr virus", correct: false },
      { text: "Echo and Coxsackie viruses", correct: false },
    ],
  },
  {
    question: "Distinguish which part of the Respiratory tract is affected by parainfluenza:",
    answers: [
      { text: "Larynx", correct: true },
      { text: "Nasopharynx", correct: false },
      { text: "Trachea", correct: false },
      { text: "Bronchi", correct: false },
      { text: "Alveoli", correct: false },
    ],
  },
  {
    question: "Distinguish which  viruses is known  to cause  hemorrhagic cystitis, diarrhea, conjunctivitis?",
    answers: [
      { text: "Adenovirus", correct: true },
      { text: "Respiratory syncytial  virus", correct: false },
      { text: "Rhinovirus", correct: false },
      { text: "Rotavirus", correct: false },
      { text: "Parainfluenza", correct: false },
    ],
  },
  {
    question: "Select  which complication of the flu has an infectious – allergic character:",
    answers: [
      { text: "Myocarditis", correct: true },
      { text: "Pneumonia", correct: false },
      { text: "	Otitis media", correct: false },
      { text: "	Sinusitis", correct: false },
      { text: "Lymphadenitis", correct: false },
    ],
  },
  {
    question: "Select which part of respiratory tract mostly get affected in parainfluenza virus infection –",
    answers: [
      { text: "	Upper and lower respiratory tract", correct: true },
      { text: "Upper respiratory tract", correct: false },
      { text: "Lower respiratory tract", correct: false },
      { text: "Upper respiratory tract and pharyngitis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20 years old boy came to the infectious department  with the complaints  of sudden  onset of fever, tonsillitis, rhinorrhea, cough, moderate abdominal ache. During the medical inspection on the 4th day there are fauces hyperemia and painful neck lymph nodes. Apply which is  the most possible etiology of the disease?",
    answers: [
      { text: "Adenovirus", correct: true },
      { text: " β-hemolytic streptococcus of A-group", correct: false },
      { text: ". Neisseria gonorrhoea", correct: false },
      { text: "Epstein-Barr virus", correct: false },
      { text: "Influenza virus", correct: false },
    ],
  },
  {
    question: "Select from the following which is the rarest clinical manifestations of adenovirus infection –",
    answers: [
      { text: "	Bronchiolitis", correct: true },
      { text: "	Pharyngitis", correct: false },
      { text: "Pneumonia", correct: false },
      { text: "Tonsillitis", correct: false },
      { text: "Conjunctivitis", correct: false },
    ],
  },
  {
    question: "Solve out the incorrect  statement  about rhinovirus:",
    answers: [
      { text: "	Incubation  period  1- 7 days", correct: true },
      { text: "	Belongs to Picornaviridae family", correct: false },
      { text: "	Cause common  cold", correct: false },
      { text: "	Nasal discharge,congestion", correct: false },
      { text: "Stages :  dry →Exudate→resolution  or complication", correct: false },
    ],
  },
  {
    question: "Select the primary  localized   form of meningococcal  infection:",
    answers: [
      { text: "Nasopharyngitis", correct: true },
      { text: "Meningoencephalitis", correct: false },
      { text: "Meningococcemia", correct: false },
      { text: "Meningitis", correct: false },
      { text: " Meningococcemia+ Meningitis", correct: false },
    ],
  },
  {
    question: "Distinguish the main complication which  will develop in severe meningococcemia ",
    answers: [
      { text: "Waterhouse – Friedrischen syndrome", correct: true },
      { text: " Brain edema", correct: false },
      { text: "Hydrocephalus", correct: false },
      { text: "Blindness", correct: false },
      { text: "Deafness", correct: false },
    ],
  },
  {
    question: "The patient came to infectious department with the following complaints: Fever, headache, neck stiffness, vomiting, Hyperesthesia, irritability, photophobia and kernig sign is positive; explain the main method which can confirm diagnosis –",
    answers: [
      { text: "Cerebrospinal fluid analysis ", correct: true },
      { text: " Complete blood count", correct: false },
      { text: "Polymerase chain reaction (PCR)", correct: false },
      { text: " Brian CT", correct: false },
      { text: "Microscopy", correct: false },
    ],
  },
  {
    question: "Distinguish the main characteristics  manifestation for meningococcemia:",
    answers: [
      { text: "Skin rash", correct: true },
      { text: "Lethargy", correct: false },
      { text: "Vomiting ", correct: false },
      { text: "Neck stiffness ", correct: false },
      { text: "Photophobia ", correct: false },
    ],
  },
  {
    question: "Select which event in the management of meningococcal meningitis is a priority?",
    answers: [
      { text: " Immediate administration of antibiotics", correct: true },
      { text: " IV saline infusion", correct: false },
      { text: "Immediate oxygen supply", correct: false },
      { text: "Abacavir", correct: false },
      { text: "Diuretics", correct: false },
    ],
  },
  {
    question: "Apply which is not the complication of meningicoccemia:",
    answers: [
      { text: "Brain edema ", correct: true },
      { text: "Disseminated intravascular coagulopathy", correct: false },
      { text: "Waterhouse Friederischen syndrome", correct: false },
      { text: "Septic shock", correct: false },
      { text: "Gangrene", correct: false },
    ],
  },
  {
    question: "Select  the  characteristics seasonality  of meningococcal  infection:",
    answers: [
      { text: "Winter and spring ", correct: true },
      { text: "Summer", correct: false },
      { text: "Rainy", correct: false },
      { text: "Winter", correct: false },
      { text: "Autumn", correct: false },
    ],
  },
  {
    question: "Create which disease  if presence  of hemorrhagic  rash and  intoxication syndrome:",
    answers: [
      { text: "Meningococcemia", correct: true },
      { text: "Meningococcal nasopharyngitis", correct: false },
      { text: "Meningitis", correct: false },
      { text: "meningoencephalitis ", correct: false },
      { text: " Pneumococcal  meningitis", correct: false },
    ],
  },
  {
    question: "Select and rule out the main mode of transmission  of meningococcal  infection ",
    answers: [
      { text: "Respiratory droplets ", correct: true },
      { text: "Fecal oral", correct: false },
      { text: "Vertical transmission ", correct: false },
      { text: "Parenteral", correct: false },
      { text: "Sexual contact", correct: false },
    ],
  },
  {
    question: "The patient is 20 years old, urgently hospitalized in the infectious diseases department with complaints of a sudden increase in temperature to 39.5 ° C, severe headaches, repeated vomiting, which does not bring relief. Objectively: he is inhibited, lying on his side, all meningeal signs are sharply positive. In the analysis of liquor, the protein content is 1.1 g/l, cytosis - 1000 cells is represented by neutrophils, In the bacteriological culture of liquor: Neiseria meningitidis. Calculate the dose of penicillin and the method of administration of the drug.",
    answers: [
      { text: "300000 IU/kg/daily – intramuscular/intravenous", correct: true },
      { text: "30000 IU /kg /daily - intramuscular/intravenous", correct: false },
      { text: "30000 IU/ kg /daily – orally", correct: false },
      { text: "3000 IU/kg/ daily – orally", correct: false },
      { text: "300000 IU/kg/daily – subcutaneous", correct: false },
    ],
  },
  {
    question: "Assume which herpes is the causative agent of  genital infection?",
    answers: [
      { text: " Herpes simplex virus  2", correct: true },
      { text: "Herpes simplex virus  1", correct: false },
      { text: "Herpes  zoster", correct: false },
      { text: "Epstein-Barr  virus", correct: false },
      { text: "Cytomegalovirus", correct: false },
    ],
  },
  {
    question: "Generalize the  target  for herpes simplex viruses:",
    answers: [
      { text: "Mucous membranes ", correct: true },
      { text: "Hepatocytes", correct: false },
      { text: "Epidermis", correct: false },
      { text: "Neurons", correct: false },
      { text: "Cilia", correct: false },
    ],
  },
  {
    question: "Distinguish characteristics of herpetic whitlow -",
    answers: [
      { text: " Painful,edema ,erythema and vesicles on fingers", correct: true },
      { text: "Appears as mucocutaneous ", correct: false },
      { text: " Late diagnosis cause  coma ", correct: false },
      { text: "Spread through fecal- oral route ", correct: false },
      { text: "It is visceral infection", correct: false },
    ],
  },
  {
    question: "Assume the contagious  period  of  herpes  zoster:",
    answers: [
      { text: "Last for 48 hrs before  rash appearance", correct: true },
      { text: "When the rash start to appear", correct: false },
      { text: "Within 2- 5 hrs after exposure", correct: false },
      { text: "When skin lesion becomes itchy", correct: false },
      { text: "Till rash begin to disappear ", correct: false },
    ],
  },
  {
    question: "Which form of  cells apply when Tzanck smear by gimesa stain is done – ",
    answers: [
      { text: "Lipschutz bodies and multinucleated giant cells", correct: true },
      { text: "Hemosiderian  cells", correct: false },
      { text: " Mast cells", correct: false },
      { text: "Eosinophils", correct: false },
      { text: "Lymphocytes", correct: false },
    ],
  },
  {
    question: "Select the clinical manifestation of herpes simplex virus which involves buccal mucosa .",
    answers: [
      { text: "Gingivostomatitis", correct: true },
      { text: "Tonsillitis", correct: false },
      { text: "Hyperemia of uvula", correct: false },
      { text: "Spot on oral mucosa ", correct: false },
      { text: "White patches filled with puss ", correct: false },
    ],
  },
  {
    question: "Select the diagnostic test which can differentiate between herpes simplex virus 1 and  herpes simplex virus 2 ? ",
    answers: [
      { text: "Herpes simplex virus DNA – PCR ", correct: true },
      { text: "Virus isolation ", correct: false },
      { text: "Microscopy", correct: false },
      { text: "Tzank smear ", correct: false },
      { text: "Giemsa – stained smears ", correct: false },
    ],
  },
  {
    question: "Calculate the confirmation test for aseptic meningitis cause by Herpes simplex virus type 2?",
    answers: [
      { text: " By Polymerase chain reaction DNA in Cerebrospinal fluid ", correct: true },
      { text: "By virus isolation", correct: false },
      { text: "By MRI", correct: false },
      { text: "By CT – scan", correct: false },
      { text: "By microscopy", correct: false },
    ],
  },
  {
    question: "Assume the genetic material of poxviruses is composed of:",
    answers: [
      { text: "Double-stranded DNA   ", correct: true },
      { text: "Single-stranded RNA", correct: false },
      { text: "Double-stranded RNA ", correct: false },
      { text: "Single-stranded DNA", correct: false },
      { text: "Circular DNA", correct: false },
    ],
  },
  {
    question: "Generalize  what step should be performed when a person is diagnosed with smallpox, ",
    answers: [
      { text: "Put in isolation in the hospital", correct: true },
      { text: "Sent home with medicine to ease symptoms", correct: false },
      { text: "Admitted to the hospital", correct: false },
      { text: "Give treatment ", correct: false },
      { text: "Wait and watch", correct: false },
    ],
  },
  {
    question: "Compare which symptom of smallpox infection shows up first?",
    answers: [
      { text: "Lymphadenopathy", correct: true },
      { text: "Rash", correct: false },
      { text: "High fever", correct: false },
      { text: "Headache and body aches", correct: false },
      { text: "B and C", correct: false },
    ],
  },
  {
    question: "Explain the time period of appearance of rash in monkey pox?",
    answers: [
      { text: "2- 4 weeks", correct: true },
      { text: "1-4 days", correct: false },
      { text: "5-10 days", correct: false },
      { text: "10-14 days", correct: false },
      { text: "7-8 days", correct: false },
    ],
  },
  {
    question: "Complete the sentence; The vaccine used to eradicate smallpox originated as:",
    answers: [
      { text: "	Live cowpox", correct: true },
      { text: "Live smallpox", correct: false },
      { text: "A genetic recombinant", correct: false },
      { text: "	Killed whole virus", correct: false },
      { text: "	Passive  vaccination ", correct: false },
    ],
  },
  {
    question: "Human to human monkeypox virus transmission can occur by which of the following routes? Use the option and find correct statement: ",
    answers: [
      { text: " A& B", correct: true },
      { text: "Respiratory droplets", correct: false },
      { text: "Exposure to skin rashes   ", correct: false },
      { text: "Fecal  oral", correct: false },
      { text: "B& C ", correct: false },
    ],
  },
  {
    question: "Solve,which of the following antiviral drug regimen has been found to be effective for the monkeypox virus?",
    answers: [
      { text: "Ticovarimat for 2 weeks   ", correct: true },
      { text: "Remdesivir for 10 days", correct: false },
      { text: "Tamiflu for 5 weeks", correct: false },
      { text: "Brincidofoir for 4 weeks", correct: false },
      { text: "Acyclovir 1 week", correct: false },
    ],
  },
  {
    question: "Apply of which the following specimen is frequently collected for the diagnosis of the monkeypox virus infection?",
    answers: [
      { text: "Lesion swab specimen ", correct: true },
      { text: "Blood specimen  ", correct: false },
      { text: "Sputum specimen", correct: false },
      { text: "Urine specimen", correct: false },
      { text: "Sputum", correct: false },
    ],
  },
  {
    question: "The 37-year-old forester went to a local medical institution with fever up to (39 ° C), chills, pustules on his face, arms and legs, some of them ulcerated, pain and enlargement of axillary lymph nodes. For the last 6 months, he has been surrounded by wildlife in the humid rainforests. Got sick about a week ago. Choose an analysis to confirm the diagnosis?",
    answers: [
      { text: "Polymerase chain reaction ", correct: true },
      { text: "Blood test", correct: false },
      { text: "Sputum culture ", correct: false },
      { text: "Skin biopsy ", correct: false },
      { text: "Serology ", correct: false },
    ],
  },
  {
    question: "Create what is the typical timeframe for the skin blisters or nodules to start diminishing during Monkeypox infection?",
    answers: [
      { text: " 2- 3 weeks ", correct: true },
      { text: " 2- 5 days", correct: false },
      { text: "1 week", correct: false },
      { text: " 3- 5 weeks", correct: false },
      { text: " 5-10 days", correct: false },
    ],
  },
  {
    question: "Specify the reason for the transition of an acute infectious process into a chronic infection in brucellosis:",
    answers: [
      { text: "All of the above", correct: true },
      { text: " Incomplete phagocytosis", correct: false },
      { text: "Allergization of the body", correct: false },
      { text: "Changing the body's reactivity", correct: false },
      { text: "Formation of unstable immunity", correct: false },
    ],
  },
  {
    question: "Interpret peripheral blood in brucellosis:",
    answers: [
      { text: "Normo- or leukopenia, lympho-, monocytosis", correct: true },
      { text: "Leukocytosis, shift of the leukocyte formula to the left", correct: false },
      { text: "Presence of atypical mononuclear cells", correct: false },
      { text: "Leukocytosis, lymphocytosis, thrombocytopenia", correct: false },
      { text: "Anemia, lymphopenia, thrombocytopenia", correct: false },
    ],
  },
  {
    question: "Select the drug of choice for the treatment of brucellosis:",
    answers: [
      { text: "Tetracyclines", correct: true },
      { text: "Penicillins", correct: false },
      { text: "Cephalosporins", correct: false },
      { text: "Macrolides", correct: false },
      { text: "Nitrofurans", correct: false },
    ],
  },
  {
    question: "Brucella can be determined by the bacteriological method in all of the above. Find the error:",
    answers: [
      { text: "Feces", correct: true },
      { text: "Blood", correct: false },
      { text: "Urine", correct: false },
      { text: "Bone marrow", correct: false },
      { text: "Liquor", correct: false },
    ],
  },
  {
    question: ".Determine the sequence of clinical forms of brucellosis in proper order: 1. Acute brucellosis; 2. Residual brucellosis; 3. Chronic brucellosis; 4. Subacute brucellosis; 5. The incubation period.",
    answers: [
      { text: "5, 1, 4, 3, 2", correct: true },
      { text: "5, 1, 2, 4, 3", correct: false },
      { text: "5, 1, 4, 2, 3", correct: false },
      { text: "5, 2, 1, 4, 3", correct: false },
      { text: "5, 2 , 3,  4, 1", correct: false },
    ],
  },
  {
    question: "Select the disease that causes endocarditis:",
    answers: [
      { text: "Brucellosis", correct: true },
      { text: "Diptheria", correct: false },
      { text: "Leptospirosis", correct: false },
      { text: "Cholera", correct: false },
      { text: "Botulism", correct: false },
    ],
  },
  {
    question: "Select a disease in which incomplete phagocytosis is observed:",
    answers: [
      { text: "Brucellosis", correct: true },
      { text: "Plague", correct: false },
      { text: "Influenza", correct: false },
      { text: "Meningococcal infections", correct: false },
      { text: "Measles", correct: false },
    ],
  },
  {
    question: "Indicate which organs are affected by brucellosis:",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Liver", correct: false },
      { text: "Spleen", correct: false },
      { text: "Peripheral lymph nodes", correct: false },
      { text: "Joints", correct: false },
    ],
  },
  {
    question: "Explain what methods are used for diagnostics of Yersiniosis: ",
    answers: [
      { text: "Bacteriological method ", correct: true },
      { text: " Immunoenzyme analysis ", correct: false },
      { text: "Bacterioscopic method", correct: false },
      { text: "Allergic test ", correct: false },
      { text: "immunological method", correct: false },
    ],
  },
  {
    question: "Infer route of transmission at Yersiniosis ",
    answers: [
      { text: " Faecal-oral ", correct: true },
      { text: "Aerosol ", correct: false },
      { text: "Blood transfusion ", correct: false },
      { text: " Transmits by the vectors ", correct: false },
      { text: "Sexual", correct: false },
    ],
  },
  {
    question: "Choose the features of rash at intestinal Yersiniosis: ",
    answers: [
      { text: "small macular, point, on the symmetric areas of trunk and extremities", correct: true },
      { text: "spotted, feel like confluence on the symmetric areas of trunk and extremities", correct: false },
      { text: "papullar and roseola on the sides of trunk, on the extensoric surfaces of upper extremities", correct: false },
      { text: "punctulate, scarlatiniform on the under body of abdomen", correct: false },
      { text: "hemorrhagic rash", correct: false },
    ],
  },
  {
    question: "Explain what chronic inflammatory diseases are accompanied by Yersinia enterocolitica?",
    answers: [
      { text: "Arthritis ", correct: true },
      { text: "Hepatitis", correct: false },
      { text: "Vasculitis", correct: false },
      { text: "Meningitis ", correct: false },
      { text: "Thrombophlebitis", correct: false },
    ],
  },
  {
    question: "Explain where abdominal pain is localized in the gastroenteric variant of yersiniosis?",
    answers: [
      { text: "localized in the umbilical region", correct: true },
      { text: "localized in the left iliac region;", correct: false },
      { text: "localized in the lower abdomen;", correct: false },
      { text: "are absent", correct: false },
      { text: "localized in the right iliac region", correct: false },
    ],
  },
  {
    question: "Show which symptom is absent in the gastrointestinal form of salmonellosis, in contrast to yersiniosis",
    answers: [
      { text: "exanthema", correct: true },
      { text: "abdominal pain;", correct: false },
      { text: "diarrhea", correct: false },
      { text: "fever", correct: false },
      { text: "constipation", correct: false },
    ],
  },
  {
    question: "Make a conclusion: what is the difference between the generalized form of yersiniosis and the abdominal form?",
    answers: [
      { text: "the possibility of developing jaundice", correct: true },
      { text: "the presence of abdominal pain;", correct: false },
      { text: "the presence of loose stools", correct: false },
      { text: "the presence of febrile temperature", correct: false },
      { text: "the presence of constipation", correct: false },
    ],
  },
  {
    question: "Explain how the generalized form of yersiniosis differs from the gastrointestinal form? ",
    answers: [
      { text: "hepato/splenomegaly", correct: true },
      { text: "abdominal pain", correct: false },
      { text: "acute onset of the disease", correct: false },
      { text: "febrile temperature", correct: false },
      { text: "constipation", correct: false },
    ],
  },
  {
    question: "Explain in which variant of yersiniosis diffuse ileitis with intestinal perforation is more common?",
    answers: [
      { text: "septic variant of yersiniosis", correct: true },
      { text: "abdominal variant of yersiniosis;", correct: false },
      { text: "secondary focal variants of yersiniosis", correct: false },
      { text: "gastrointestinal variant of yersiniosis", correct: false },
      { text: "anginal variant", correct: false },
    ],
  },
  {
    question: "Explain to which drugs Yersinia is sensitive",
    answers: [
      { text: "fluoroquinolones", correct: true },
      { text: "Macrolides", correct: false },
      { text: "Penicillin ", correct: false },
      { text: "trimethoprim", correct: false },
      { text: "sulfonamides;", correct: false },
    ],
  },
  {
    question: "Select possible complications and outcomes for cutaneous anthrax: ",
    answers: [
      { text: "Secondary septicemia ", correct: true },
      { text: "Recovery ", correct: false },
      { text: " Lethal outcome ", correct: false },
      { text: "infectious-toxic shock", correct: false },
      { text: "Dehydration", correct: false },
    ],
  },
  {
    question: "explain what is characteristic of the cutaneous form of anthrax? ",
    answers: [
      { text: "gelatinous painless edema and regional lymphadenitis", correct: true },
      { text: "gelatinous painless edema without regional lymphadenitis", correct: false },
      { text: "gelatinous painful edema without regional lymphadenitis", correct: false },
      { text: "gelatinous painful edema and regional lymphadenitis", correct: false },
      { text: "gelatinous painful edema ", correct: false },
    ],
  },
  {
    question: "Idicate which of the following methods are used to diagnose anthrax: ",
    answers: [
      { text: "Bacterioscopic and bacteriological methods ", correct: true },
      { text: "Agglutination reaction by Wright - Heddleson", correct: false },
      { text: "Serological Widal's reaction ", correct: false },
      { text: "Allergic test ", correct: false },
      { text: "Microscopic test ", correct: false },
    ],
  },
  {
    question: "Select the most common localization of anthrax carbuncle: ",
    answers: [
      { text: "Upper limbs ", correct: true },
      { text: "Head ", correct: false },
      { text: "Neck ", correct: false },
      { text: "Body ", correct: false },
      { text: "Lower limbs ", correct: false },
    ],
  },
  {
    question: "Find the error: typical symptoms of anthrax carbuncle include:",
    answers: [
      { text: "Pain", correct: true },
      { text: "Black scab ", correct: false },
      { text: "Secondary vesicle ", correct: false },
      { text: "Edema", correct: false },
      { text: "Painless", correct: false },
    ],
  },
  {
    question: "Explain what should be done in the following situation: the patient is diagnosed as \"Anthrax, a cutaneous form, a mild period.\" This patient",
    answers: [
      { text: "Patient is hospitalized and isolated ", correct: true },
      { text: "Can continue to be treated as an outpatient ", correct: false },
      { text: "If desired, the patient is hospitalized", correct: false },
      { text: "Continues treatment in hospital", correct: false },
      { text: "Prescribe treatment at home", correct: false },
    ],
  },
  {
    question: " Indicate the most common complications of pulmonary anthrax: ",
    answers: [
      { text: "Hemorrhagic pulmonary edema ", correct: true },
      { text: "Intestinal perforation ", correct: false },
      { text: "Exudative pleurisy ", correct: false },
      { text: "Intestinal bleeding ", correct: false },
      { text: "lymphadenitis", correct: false },
    ],
  },
  {
    question: "A 43-year-old man having livestock as a profession had a cutaneous anthrax infection on the dorsal surface of his left thumb. The patient was infected with anthrax by slaughtering a sheep infected with Bacillus anthracis. Prescribe treatment ",
    answers: [
      { text: "Penicillin ", correct: true },
      { text: "Rifampicins ", correct: false },
      { text: "Biseptol", correct: false },
      { text: "Lincomycin", correct: false },
      { text: "Fluconazole", correct: false },
    ],
  },
  {
    question: "Indicate which of the following is an effective treatment for clinical rabies:",
    answers: [
      { text: "None of the above", correct: true },
      { text: "Wound cleansing", correct: false },
      { text: "Immunization with modern cell-culture vaccine", correct: false },
      { text: "Infusion with HRIG (human anti-rabies immunoglobulin)", correct: false },
      { text: "Antiviral therapy", correct: false },
    ],
  },
  {
    question: "Signs of rabies include all of the following. Find error:",
    answers: [
      { text: " Rash", correct: true },
      { text: "Headache", correct: false },
      { text: "Hydrophobia", correct: false },
      { text: " Disorientation", correct: false },
      { text: "Hypersalivation", correct: false },
    ],
  },
  {
    question: "Indicate the probability of death from rabies if it is not treated:",
    answers: [
      { text: "1", correct: true },
      { text: "0.9999", correct: false },
      { text: "0.99", correct: false },
      { text: "0.97", correct: false },
      { text: "0.5", correct: false },
    ],
  },
  {
    question: "Rabies clinically progresses through the following periods of illness. Find error:",
    answers: [
      { text: "Recovery period", correct: true },
      { text: "Incubation", correct: false },
      { text: "Paralytic period", correct: false },
      { text: "Height period", correct: false },
      { text: "Prodromal period", correct: false },
    ],
  },
  {
    question: "Acute disease induced by an exotoxin and is characterized by painful muscular contractions of masseter, neck, trunk muscles, abdominal rigidity, generalized spasm - position of opisthotonus and facial expression (risus sardonicus). Identify the disease.",
    answers: [
      { text: "Tetanus", correct: true },
      { text: "Rabies", correct: false },
      { text: "Meningitis", correct: false },
      { text: "Anthrax", correct: false },
      { text: "Plague", correct: false },
    ],
  },
  {
    question: "Indicate what causes the main symptoms of tetanus:",
    answers: [
      { text: "Production of tetanospasmin", correct: true },
      { text: "Multiplication of the organisms at the site of the infection", correct: false },
      { text: "Production of botulin toxin", correct: false },
      { text: "Bacteria multiplying in bloodstream", correct: false },
      { text: "Production of lethal factors", correct: false },
    ],
  },
  {
    question: "The following conditions lead to death in tetanus. Find error:",
    answers: [
      { text: "Renal insufficiency", correct: true },
      { text: "Asphyxia", correct: false },
      { text: "Cardiac paralysis", correct: false },
      { text: "Complications (pneumonia, sepsis)", correct: false },
      { text: "Thromboembolism of the pulmonary arteries", correct: false },
    ],
  },
  {
    question: "Indicate which structures of the nervous system are affected in tetanus:",
    answers: [
      { text: "Interneurons", correct: true },
      { text: "Motor fibers", correct: false },
      { text: "Motoneurons", correct: false },
      { text: "Sensory fibers", correct: false },
      { text: "Nerve endings", correct: false },
    ],
  },
  {
    question: "Complications of tetanus include all of the following. Find error:",
    answers: [
      { text: "Lung infarction", correct: true },
      { text: "Bronchopneumonia", correct: false },
      { text: "Lobulary pneumonia", correct: false },
      { text: "Pulmonary atelectasis", correct: false },
      { text: "Thromboembolism of the pulmonary arteries", correct: false },
    ],
  },
  {
    question: "Specify the symptoms of central nervous system damage due to tetanus:",
    answers: [
      { text: "Clear consciousness", correct: true },
      { text: "Confusion", correct: false },
      { text: "Complete loss of consciousness", correct: false },
      { text: "Delirious state", correct: false },
      { text: "Inadequate condition", correct: false },
    ],
  },
  {
    question: "Indicate  the  type of bacteria that causes epidemic typhus:",
    answers: [
      { text: "Rickettsae prowazeki", correct: true },
      { text: "Rickettsae typhi", correct: false },
      { text: "Rickettsae tsutsugamushi", correct: false },
      { text: "Rickettsae akari", correct: false },
      { text: "Rickettsae rickettsii", correct: false },
    ],
  },
  {
    question: "Name the rickettsial diseases which is louse born:",
    answers: [
      { text: "Epidemic typhus", correct: true },
      { text: "Endemic typhus", correct: false },
      { text: "Rocky Mountain Spotted fever", correct: false },
      { text: "Scrab typhus", correct: false },
      { text: "Indian typhus", correct: false },
    ],
  },
  {
    question: "All of the following rickettsial diseases are zoonoses. Show error:",
    answers: [
      { text: "Epidemic typhus", correct: true },
      { text: "Endemic typhus", correct: false },
      { text: "Scrub typhus", correct: false },
      { text: "Rocky Mountain Spotted fever", correct: false },
      { text: "Indian typhus", correct: false },
    ],
  },
  {
    question: "Specify the pathogen that causes Brill-Zinsser disease:",
    answers: [
      { text: "Rickettsae prowazeki", correct: true },
      { text: "Rickettsae typhi", correct: false },
      { text: "Rickettsae tsutsugamushi", correct: false },
      { text: " Rickettsae akari", correct: false },
      { text: "Rickettsae rickettsii", correct: false },
    ],
  },
  {
    question: "Rickettsiae are characterized by the following statements. Find error.",
    answers: [
      { text: "All the rickettsial diseases are zoonoses", correct: true },
      { text: "Rickettsiae are obligate intracellular bacteria", correct: false },
      { text: "Weil-Felix test can be used in the diagnosis of rickettsial disease", correct: false },
      { text: "Rickettsiae are gram negative but stain poorly with standard Gram Stain", correct: false },
      { text: "There is no transmission from human to human", correct: false },
    ],
  },
  {
    question: "Variable onset, often sudden and marked by headache, chills, prostration, fever, macular eruption appears on the fifth to sixth day on the upper trunk, and then to the entire body, but not face, palms, or soles; recrudescence might occur (Brill-Zinsser disease). Identify the disease:",
    answers: [
      { text: "Epidemic typhus", correct: true },
      { text: "Endemic typhus", correct: false },
      { text: "Scrub typhus", correct: false },
      { text: "Q-fever", correct: false },
      { text: "Rocky Mountain Spotted fever", correct: false },
    ],
  },
  {
    question: "Determine the main mechanism of the pathogenesis of epidemic typhus:",
    answers: [
      { text: "Functional disorders of the vascular apparatus", correct: true },
      { text: "Lymphadenitits and lymphangitis", correct: false },
      { text: "Damage to the CNS", correct: false },
      { text: "Impaired liver and kidney function", correct: false },
      { text: "Damage to the osteoarticular apparatus", correct: false },
    ],
  },
  {
    question: "Indicate the error: in the initial period of the disease, Q fever is characterized by the following symptoms:",
    answers: [
      { text: "Hematuria", correct: true },
      { text: "Fever", correct: false },
      { text: "Hyperemia of the face", correct: false },
      { text: "Hepatolienal syndrome", correct: false },
      { text: "Meningism", correct: false },
    ],
  },
  {
    question: "Point out, what laboratory method is used to confirm the diagnosis of ricketsiosis:",
    answers: [
      { text: "Serological studies", correct: true },
      { text: "Blood culture", correct: false },
      { text: "Microscopy of a blood smear", correct: false },
      { text: "Stool culture", correct: false },
      { text: "Urine culture", correct: false },
    ],
  },
  {
    question: "Outline the typical complication of epidemic typhus:",
    answers: [
      { text: "Pulmonary embolism", correct: true },
      { text: "Pneumonia", correct: false },
      { text: "Paralysis", correct: false },
      { text: "Pyelitis", correct: false },
      { text: "Blindness", correct: false },
    ],
  },
  {
    question: "Select a disease in which complications such as pleuritis, thrombophlebitis, arthritis, pulmonary infarction appear:",
    answers: [
      { text: "Q-fever", correct: true },
      { text: "Meningococcal infection", correct: false },
      { text: "Typhoid fever", correct: false },
      { text: "Botulism", correct: false },
      { text: "Tetanus", correct: false },
    ],
  },
  {
    question: "Outline what kind of immunity is developed after suffering epidemic typhus:",
    answers: [
      { text: "Strong immunity", correct: true },
      { text: "Weak immunity up to 1 month", correct: false },
      { text: "Short-term immunity - up to 6 months", correct: false },
      { text: "Long-term immunity - up to 1 year", correct: false },
      { text: "Artificial, active immunity", correct: false },
    ],
  },
  {
    question: "Select a disease in which a primary affect appears at the site of a tick bite, high fever, headache, pain in the limbs and lower back, meningeal syndrome, in the blood: moderate leukocytosis, lymphocytosis, eosinopenia:",
    answers: [
      { text: "Borreliosis", correct: true },
      { text: "Epidemic typhus", correct: false },
      { text: "Endemic typhus", correct: false },
      { text: "Q-fever", correct: false },
      { text: "Chickungunia", correct: false },
    ],
  },
  {
    question: "Specify the combination of symptoms characteristic of systemic tick-borne borreliosis:",
    answers: [
      { text: "Fever, erythema annulare, cardiac, neurological lesions, arthritis", correct: true },
      { text: "Fever, hepatosplenomegaly, roseolous rash, polilymphoadenopathy", correct: false },
      { text: "Fever, arthritis, erythema nodosum; nausea, vomiting, diarrhea", correct: false },
      { text: "Fever, damage to the heart and joints, meningoencephalitis", correct: false },
      { text: "Fever, petechial rash, polyneuropathia, hepatosplenomegaly", correct: false },
    ],
  },
  {
    question: "Distinguish the disease, which is characterized by the appearance of erythema migrans in the area of tick bite:",
    answers: [
      { text: "Borreliosis", correct: true },
      { text: "Erysipelas", correct: false },
      { text: "Anthrax", correct: false },
      { text: "Plague", correct: false },
      { text: "Endemic typhus", correct: false },
    ],
  },
  {
    question: "Lyme disease has all of the following signs of joint damage. Show error:",
    answers: [
      { text: "Joints are not affected", correct: true },
      { text: "Have an infectious-allergic nature", correct: false },
      { text: "May lead to osteoporosis, osteoarthritis", correct: false },
      { text: "Lesions of large joints", correct: false },
      { text: "Have a protracted and chronic course ", correct: false },
    ],
  },
  {
    question: "A 44-year-old woman was admitted to the hospital in July with mild oral paralysis and mild fatigue that persisted for 2 months. During examination: T°-37.2°C, BP -120/60 mm Hg. There are no wheezes in the lungs; however, her mouth muscles were slightly tense. She could open her mouth about 1.5 cm, but the left side of her mouth drooped on one side and she had difficulty closing her left eye. Thus, general examination of her mouth suggested facial palsy. It turned out that 3 months ago, during a hike, she was bitten by ticks. Select disease:",
    answers: [
      { text: "Borreliosis", correct: true },
      { text: "Tetanus", correct: false },
      { text: "Tick-born encephalitis", correct: false },
      { text: "Polyomielitis", correct: false },
      { text: "Meningococcal infection", correct: false },
    ],
  },
  {
    question: "Specify what symptom helps to differentiate borreliosis from other diseases:",
    answers: [
      { text: "The presence of erythema migrans", correct: true },
      { text: "The presence of a bubo", correct: false },
      { text: " The presence of a hard chancre", correct: false },
      { text: "The presence of a black eschar", correct: false },
      { text: "The presence of vesicular-papular rashes", correct: false },
    ],
  },
  {
    question: "Specify the characteristic of Lyme disease:",
    answers: [
      { text: "The mechanism of infection is transmissible", correct: true },
      { text: " The causative agent is rickettsia", correct: false },
      { text: "Reservoir is a human", correct: false },
      { text: "The main vector - fleas", correct: false },
      { text: "The incidence is recorded in the steppe regions", correct: false },
    ],
  },
  {
    question: "Point out the error in the Lyme disease statement:",
    answers: [
      { text: "Found in India", correct: true },
      { text: "Caused by a spirochete", correct: false },
      { text: "Natural focal infections", correct: false },
      { text: "Vectors - ixodid ticks", correct: false },
      { text: "Distributed in wooded areas", correct: false },
    ],
  },
  {
    question: "Show the causative agent of tick-borne encephalitis:",
    answers: [
      { text: "Virus", correct: true },
      { text: "Bacteria", correct: false },
      { text: "Rickettsia", correct: false },
      { text: "Chlamydia", correct: false },
      { text: "Parasite", correct: false },
    ],
  },
  {
    question: " Name the main reservoir and vectors of agent of encephalitis:",
    answers: [
      { text: "Ticks", correct: true },
      { text: "Liсe", correct: false },
      { text: "Fleas", correct: false },
      { text: " Flies", correct: false },
      { text: "Chiggers", correct: false },
    ],
  },
  {
    question: "Specify the route of transmission of two-wave fever of tick-borne encephalitis:",
    answers: [
      { text: "Dairy produce", correct: true },
      { text: "Contact", correct: false },
      { text: "Airborne", correct: false },
      { text: "Transmissible", correct: false },
      { text: "Parenteral", correct: false },
    ],
  },
  {
    question: "Indicate the changes in the cerebrospinal fluid in tick-borne encephalitis",
    answers: [
      { text: "Lymphocytic pleocytosis", correct: true },
      { text: "Neutrophilic pleocytosis", correct: false },
      { text: "Hemorrhagic", correct: false },
      { text: "Hemorrhagic and lymphocytic pleocytosis", correct: false },
      { text: "No changes", correct: false },
    ],
  },
  {
    question: "For diagnosis of tick-born encephalitis used the following lab tests:",
    answers: [
      { text: "Patch test", correct: true },
      { text: "ELISA", correct: false },
      { text: "PCR", correct: false },
      { text: "Immunofluorescent", correct: false },
      { text: "CSF", correct: false },
    ],
  },
  {
    question: "Specify the clinical form that does not occur in tick-borne encephalitis:",
    answers: [
      { text: "Poliomyelitiс", correct: true },
      { text: "Meningeal", correct: false },
      { text: "Meningoencephalitic", correct: false },
      { text: "Febrile", correct: false },
      { text: "Bulbar", correct: false },
    ],
  },
  {
    question: "Indicate the main clinical sign of Japanese encephalitis:",
    answers: [
      { text: "Meningoencephalitis", correct: true },
      { text: "Meningitis", correct: false },
      { text: "Bulbar disorder", correct: false },
      { text: "Myelitis", correct: false },
      { text: "Poliomyelitis", correct: false },
    ],
  },
  {
    question: "Specify the characteristic symptoms of tick-borne encephalitis:",
    answers: [
      { text: "Sudden onset, fever, severe central nervous system damage", correct: true },
      { text: "Long incubation period, lethargy, central nervous system disorder", correct: false },
      { text: "Sudden onset, lethargy, apathy, headache", correct: false },
      { text: "Gradual onset, fever, headache, sweating", correct: false },
      { text: "Gradual onset, arthralgic syndrome, oculomotor disorders", correct: false },
    ],
  },
  {
    question: "Indicate the error: When collecting an anamnesis in a patient with suspected tick-borne encephalitis, the presence or absence of the following complaints is ascertained:",
    answers: [
      { text: "Dysuric disorders", correct: true },
      { text: "Headache", correct: false },
      { text: "Fever", correct: false },
      { text: "Nausea, vomiting", correct: false },
      { text: "Intoxication", correct: false },
    ],
  },
  {
    question: "Specify how long an infected tick remains contagious:",
    answers: [
      { text: "For life", correct: true },
      { text: "A few days", correct: false },
      { text: "A few weeks", correct: false },
      { text: "From 1 to 3 months", correct: false },
      { text: "1-2 years", correct: false },
    ],
  },
  {
    question: "The clinical picture of Japanese encephalitis is characterized by all of the following. Find the error:",
    answers: [
      { text: "Mild disease", correct: true },
      { text: "Acute onset", correct: false },
      { text: "Incorrect nature of the temperature curve", correct: false },
      { text: "Lesions of the central and peripheral nervous system", correct: false },
      { text: "Changes in the cerebrospinal fluid", correct: false },
    ],
  },
  {
    question: "Specify a method for detecting tick-borne encephalitis virus in ticks",
    answers: [
      { text: "PCR", correct: true },
      { text: "Complement fixation", correct: false },
      { text: "Immune blot", correct: false },
      { text: "ELISA", correct: false },
      { text: "Bacteriological method", correct: false },
    ],
  },
  {
    question: "Specify the most significant in the epidemiology of tick-borne encephalitis",
    answers: [
      { text: "Staying in endemic regions during the season of tick activity", correct: true },
      { text: "Contact with a sick person", correct: false },
      { text: "Contact with farm animals", correct: false },
      { text: "Living in the countryside", correct: false },
      { text: "Use of meat products", correct: false },
    ],
  },
  {
    question: "Specify an error among the main clinical forms of tick-borne encephalitis",
    answers: [
      { text: "Intestinal", correct: true },
      { text: "Feverish", correct: false },
      { text: "Meningeal", correct: false },
      { text: "Meningoencephalitic", correct: false },
      { text: "Polyradiculoneuritic", correct: false },
    ],
  },
  {
    question: "Indicate the known name of the plague",
    answers: [
      { text: "Black death ", correct: true },
      { text: "Blue death ", correct: false },
      { text: "Yellow fever ", correct: false },
      { text: "Kala azar", correct: false },
      { text: "Black fever", correct: false },
    ],
  },
  {
    question: "Indicate which of the following is the cause of plague?",
    answers: [
      { text: "Yersinia pestis", correct: true },
      { text: "Trichinella spiralis ", correct: false },
      { text: "Salmonella typhimurium", correct: false },
      { text: "Leismania donovani", correct: false },
      { text: "Coxiella burnetti", correct: false },
    ],
  },
  {
    question: "Estimate the degree of bubo tenderness in bubonic plague",
    answers: [
      { text: "Sharply painful", correct: true },
      { text: "Moderately painful", correct: false },
      { text: "Periodically painful", correct: false },
      { text: "Less painful", correct: false },
      { text: "Painless", correct: false },
    ],
  },
  {
    question: "Indicate how long a person usually lived after infection before becoming ill?",
    answers: [
      { text: "3-5 days ", correct: true },
      { text: "24 hours ", correct: false },
      { text: "10-12 days ", correct: false },
      { text: "20-24 days", correct: false },
      { text: "1 month", correct: false },
    ],
  },
  {
    question: "The European population became infected with the plague in the following ways. Find error:",
    answers: [
      { text: "Being bitten by infected mosquitoes", correct: true },
      { text: "By touching everything worn by people who were infected", correct: false },
      { text: "Being in the same room with someone was already infected", correct: false },
      { text: "Being bitten by infected fleas", correct: false },
      { text: "Slaughtering a sick camel", correct: false },
    ],
  },
  {
    question: "Specify the most contagious type of plague",
    answers: [
      { text: "Pneumonic plague", correct: true },
      { text: "Bubonic plague ", correct: false },
      { text: "Septicemic plague", correct: false },
      { text: "Wild plague", correct: false },
      { text: "Cutaneous plague", correct: false },
    ],
  },
  {
    question: "All the following are true regarding to plague. Finf error:",
    answers: [
      { text: "Cases of bubonic plague are infectious", correct: true },
      { text: "Xenopsylla cheopis is the main vector", correct: false },
      { text: "Reservoir of the infection in wild rodents", correct: false },
      { text: "Flea rates are not specific indicators of an impending epidemic", correct: false },
      { text: "Caused by Yersinia pestis", correct: false },
    ],
  },
  {
    question: "Indicate the disease, which include the follow symptoms: bubo, fever, intoxication, infectious-toxic shock: ",
    answers: [
      { text: "Plague", correct: true },
      { text: "Cholera", correct: false },
      { text: "Tularemia", correct: false },
      { text: "Anthrax", correct: false },
      { text: "Yersiniosis", correct: false },
    ],
  },
  {
    question: "Select diseases with which differential diagnosis of pneumonic plague is carried out",
    answers: [
      { text: "Tularemia, Acute purulent lymphadenitis, lobar pneumonia", correct: true },
      { text: "Hydradenitis, Cholera, Pulmonary tuberculosis", correct: false },
      { text: "Anthrax, Sepsis, Hemorrhagic fever", correct: false },
      { text: "Rabies, Tetanus, Anthrax", correct: false },
      { text: "Epidemic typhus, Botulism, Typhoid fever", correct: false },
    ],
  },
  {
    question: "Determine the most important sign of the septic form of plague",
    answers: [
      { text: "Hemorrhagic septicemia", correct: true },
      { text: "Absence of typical manifestations in the form of buboes or pneumonia", correct: false },
      { text: "Presence of toxic lymphadenitis", correct: false },
      { text: "Toxico - infectious shock", correct: false },
      { text: "Water - electrolyte disorders", correct: false },
    ],
  },
  {
    question: "Select the drug of choice for the plague",
    answers: [
      { text: "Streptomycin", correct: true },
      { text: "Tetracycline", correct: false },
      { text: "Chloramphenicol", correct: false },
      { text: "Ampicillin", correct: false },
      { text: "Ceftriaxon", correct: false },
    ],
  },
  {
    question: "Сomplete the sentence: The most common complications of bubonic plague is …  ",
    answers: [
      { text: "Septicemia", correct: true },
      { text: "Pneumonia", correct: false },
      { text: "Meningitis", correct: false },
      { text: "Phlegmon", correct: false },
      { text: "Erysipelas", correct: false },
    ],
  },
  {
    question: "Specify at what disease the following anti-epidemic measures are applied: disinfection, chemoprophylaxis, vaccination?",
    answers: [
      { text: "Plague", correct: true },
      { text: "Infectious mononucleosis", correct: false },
      { text: "Adenovirus infection", correct: false },
      { text: "Brucellosis", correct: false },
      { text: "Rabies", correct: false },
    ],
  },
  {
    question: "Determine, which form of plague is the most dangerous and life-threatening?",
    answers: [
      { text: "Septicemic", correct: true },
      { text: "Bubonic", correct: false },
      { text: "Pneumonic", correct: false },
      { text: "Cutaneous", correct: false },
      { text: "Gastrointestinal", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
