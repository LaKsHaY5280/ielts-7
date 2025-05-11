import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 17 General Reading Test 1
 */
export const Cambridge17GRTest1Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 1: Questions 1-14</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-5</h3>
          <p className="mb-2">
            Which places would you go to in the following situations?
          </p>
          <p className="mb-4">
            Write the correct letter, A-H, in boxes 1-5 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">List of Places:</h4>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <strong>A</strong> Information Desk
              </div>
              <div>
                <strong>E</strong> Green Channel
              </div>
              <div>
                <strong>B</strong> Hotel Reservation Counter
              </div>
              <div>
                <strong>F</strong> Level Two
              </div>
              <div>
                <strong>C</strong> Lost and Found Counter
              </div>
              <div>
                <strong>G</strong> Reception Desk
              </div>
              <div>
                <strong>D</strong> Red Channel
              </div>
              <div>
                <strong>H</strong> Baggage Claim Belt
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>1.</strong> You find after your flight that your
                suitcase has split.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q1-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q1-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>2.</strong> You want to reserve a room at a transit
                hotel.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q2-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q2-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>3.</strong> You are not sure if you have bought too much
                in the duty-free shop.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q3-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q3-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>4.</strong> You are not sure where to collect your
                luggage after your flight.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q4-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q4-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>5.</strong> You need someone to help you with your
                suitcases.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q5-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q5-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 6-10</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in the
            text?
          </p>
          <p className="mb-2">In boxes 6-10 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>TRUE</strong> if the statement agrees with the information
            </p>
            <p className="mb-1">
              <strong>FALSE</strong> if the statement contradicts the
              information
            </p>
            <p className="mb-1">
              <strong>NOT GIVEN</strong> if there is no information on this
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>6.</strong> Everyone is obliged to pay a 3% tax on goods
                they bring into Singapore.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q6-true" />
                  <Label htmlFor="q6-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q6-false" />
                  <Label htmlFor="q6-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q6-ng" />
                  <Label htmlFor="q6-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>7.</strong> You can only reclaim tax on purchases made
                in certain shops.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q7-true" />
                  <Label htmlFor="q7-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q7-false" />
                  <Label htmlFor="q7-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q7-ng" />
                  <Label htmlFor="q7-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>8.</strong> If you have spent a total of S$150 on your
                purchases, you can get a tax refund.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q8-true" />
                  <Label htmlFor="q8-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q8-false" />
                  <Label htmlFor="q8-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q8-ng" />
                  <Label htmlFor="q8-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>9.</strong> You have to reclaim your tax within a
                certain amount of time.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q9-true" />
                  <Label htmlFor="q9-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q9-false" />
                  <Label htmlFor="q9-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q9-ng" />
                  <Label htmlFor="q9-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>10.</strong> You will be charged a certain amount for
                administration when you get the tax back.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q10-true" />
                  <Label htmlFor="q10-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q10-false" />
                  <Label htmlFor="q10-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q10-ng" />
                  <Label htmlFor="q10-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 11-14</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage
            for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 11-14 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>11.</strong> The Singapore Marriott Hotel is described
                as an <Input type="text" className="w-48 inline-block mx-1" />
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>12.</strong> The land that Tang bought was located
                opposite a{" "}
                <Input type="text" className="w-48 inline-block mx-1" />
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>13.</strong> The{" "}
                <Input type="text" className="w-48 inline-block mx-1" /> of the
                new Tang building is very similar to that of the original
                building.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>14.</strong> Access to several{" "}
                <Input type="text" className="w-48 inline-block mx-1" /> at the
                Singapore Airlines Service Centre means that you don't need to
                wait for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 2: Questions 15-27</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 15-20</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 15-20 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>15.</strong> Many job applicants do not dare to reveal
                in a CV what their real{" "}
                <Input type="text" className="w-48 inline-block mx-1" /> is.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16.</strong> If applicants do not include what makes
                them distinctive, their CVs are likely to appear{" "}
                <Input type="text" className="w-48 inline-block mx-1" /> to the
                reader.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17.</strong> Applicants need to find ways to define the{" "}
                <Input type="text" className="w-48 inline-block mx-1" /> that
                make them do well in their work.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18.</strong> It can be helpful for applicants to try to
                base a consideration of themselves on the{" "}
                <Input type="text" className="w-48 inline-block mx-1" /> of
                others.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19.</strong> Requesting the input of a dependable{" "}
                <Input type="text" className="w-48 inline-block mx-1" /> can
                help an applicant work out their own good points.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>20.</strong> It is best to avoid the{" "}
                <Input type="text" className="w-48 inline-block mx-1" /> used by
                many applicants when describing themselves in a CV.
              </p>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21-27</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 21-27 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">
              How to become more organised at work
            </h4>

            <p className="font-semibold mb-2">
              Maintaining order in the work area involves
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                keeping the minimum amount of necessary <strong>21.</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" /> and
                paperwork
              </li>
              <li>
                restricting the number of personal <strong>22.</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" /> on the
                work surface
              </li>
              <li>
                deciding on sensible <strong>23.</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" /> for
                things that are needed regularly or hardly ever
              </li>
              <li>
                placing containers on the desk identified by{" "}
                <strong>24.</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" /> to
                organise on-going paperwork
              </li>
              <li>
                storing documents if there is an official <strong>25.</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" /> to do
                so
              </li>
            </ul>

            <p className="font-semibold mb-2">
              Planning ahead is important because
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                in general, it will improve the employee's <strong>26.</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" /> on work
              </li>
              <li>
                thinking about the next day's work ensures important{" "}
                <strong>27.</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" /> are
                given due attention
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 3: Questions 28-40</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28-32</h3>
          <p className="mb-2">The text has five sections, A-E.</p>
          <p className="mb-4">
            Write the correct number, i-viii, in boxes 28-32 on your answer
            sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">List of Headings</h4>
            <p>
              <strong>i</strong> A controversy over two versions of an invention
            </p>
            <p>
              <strong>ii</strong> The need to mine deeper for good quality coal
            </p>
            <p>
              <strong>iii</strong> Growing awareness of the need to improve
              conditions for miners
            </p>
            <p>
              <strong>iv</strong> A new danger caused by developments in mining
            </p>
            <p>
              <strong>v</strong> The impact of poor air quality in mines on
              miners' health
            </p>
            <p>
              <strong>vi</strong> Early attempts to provide lighting without
              flames
            </p>
            <p>
              <strong>vii</strong> A demand by miners for new technology
            </p>
            <p>
              <strong>viii</strong> A person whose work never received full
              recognition
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>28.</strong> Section A
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div key={num} className="flex items-center space-x-1">
                      <RadioGroupItem value={num} id={`q28-${num}`} />
                      <Label htmlFor={`q28-${num}`}>{num}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29.</strong> Section B
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div key={num} className="flex items-center space-x-1">
                      <RadioGroupItem value={num} id={`q29-${num}`} />
                      <Label htmlFor={`q29-${num}`}>{num}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30.</strong> Section C
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div key={num} className="flex items-center space-x-1">
                      <RadioGroupItem value={num} id={`q30-${num}`} />
                      <Label htmlFor={`q30-${num}`}>{num}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31.</strong> Section D
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div key={num} className="flex items-center space-x-1">
                      <RadioGroupItem value={num} id={`q31-${num}`} />
                      <Label htmlFor={`q31-${num}`}>{num}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>32.</strong> Section E
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div key={num} className="flex items-center space-x-1">
                      <RadioGroupItem value={num} id={`q32-${num}`} />
                      <Label htmlFor={`q32-${num}`}>{num}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 33-36</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 33-36 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">
              The problem of providing artificial lighting in coal mines
            </h4>

            <p className="mb-4">
              Coal mines in Europe only really developed from the 13th century.
              As they became deeper, the methods used for lighting them created
              a serious risk of <strong>33.</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> due to
              the presence of firedamp. One solution was to improve ventilation
              by separating the <strong>34.</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> into two
              parts. However, better lighting was also needed. One suggestion
              was to use a chemical found in the skins of fish, but this was
              found to be unsafe. Another possibility was a device which created{" "}
              <strong>35.</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" />, as it
              was believed these would not ignite the gas. However, this
              required additional <strong>36.</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> as well
              as maintenance and replacement, and it was also unsafe.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37-40</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 37-40 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>37.</strong> What does the writer say about mine owners
                in 1810?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q37-a" className="mt-1" />
                  <Label htmlFor="q37-a" className="flex-1">
                    Most of them disregarded safety issues.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q37-b" className="mt-1" />
                  <Label htmlFor="q37-b" className="flex-1">
                    They were criticised for conditions in the mines.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q37-c" className="mt-1" />
                  <Label htmlFor="q37-c" className="flex-1">
                    Most of them used unfair pressure to keep mines open.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q37-d" className="mt-1" />
                  <Label htmlFor="q37-d" className="flex-1">
                    They were unaware of how dangerous the mines were.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>38.</strong> According to the writer, what was the
                significance of the explosion at Felling Colliery in 1812?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q38-a" className="mt-1" />
                  <Label htmlFor="q38-a" className="flex-1">
                    It led to increased legal protection for miners.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q38-b" className="mt-1" />
                  <Label htmlFor="q38-b" className="flex-1">
                    It led to a change in public attitudes to mining safety.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q38-c" className="mt-1" />
                  <Label htmlFor="q38-c" className="flex-1">
                    It demonstrated the lack of concern of certain groups
                    towards the miners.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q38-d" className="mt-1" />
                  <Label htmlFor="q38-d" className="flex-1">
                    It started a movement to give miners proper training in
                    safety procedures.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>39.</strong> The lamp presented by Davy was safer than
                previous methods of lighting because its flame
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q39-a" className="mt-1" />
                  <Label htmlFor="q39-a" className="flex-1">
                    could not remain alight for a long time.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q39-b" className="mt-1" />
                  <Label htmlFor="q39-b" className="flex-1">
                    did not get large enough to ignite the firedamp.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q39-c" className="mt-1" />
                  <Label htmlFor="q39-c" className="flex-1">
                    did not have any contact with the air.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q39-d" className="mt-1" />
                  <Label htmlFor="q39-d" className="flex-1">
                    could not pass beyond the mesh screen.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>40.</strong> What does the writer say about Davy and
                Stephenson?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q40-a" className="mt-1" />
                  <Label htmlFor="q40-a" className="flex-1">
                    Davy refused to accept Stephenson's work as it had not been
                    fully trialled.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q40-b" className="mt-1" />
                  <Label htmlFor="q40-b" className="flex-1">
                    Davy insisted on the safety lamp being named after him
                    rather than Stephenson.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q40-c" className="mt-1" />
                  <Label htmlFor="q40-c" className="flex-1">
                    Stephenson claimed Davy's work was based on false
                    principles.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q40-d" className="mt-1" />
                  <Label htmlFor="q40-d" className="flex-1">
                    Stephenson produced a working example of a safety lamp
                    before Davy.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
