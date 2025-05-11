// Cambridge 15 General Reading Test 4 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 15 General Reading Test 4
 */
export const Cambridge15GRTest4Questions: React.FC = () => {
  return (
    <div className="reading-questions p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">SECTION 1: Questions 1-14</h2>

      {/* Questions 1-7 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 1-7</h3>
        <p className="mb-2">
          The text has six paragraphs, <strong>A-F</strong>.
        </p>
        <p className="mb-2">
          <strong>Which paragraph mentions the following?</strong>
        </p>
        <p className="mb-2">
          Write the correct letter, <strong>A-F</strong>, in boxes 1-7 on your
          answer sheet.
        </p>
        <p className="mb-4">
          <strong>NB</strong> You may use any letter more than once.
        </p>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>1.</strong> what still needs to be done
            </p>
            <RadioGroup name="question1" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q1-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q1-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q1-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>2.</strong> the original suggestion for creating the path
            </p>
            <RadioGroup name="question2" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q2-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q2-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q2-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>3.</strong> a reason why the path opened early
            </p>
            <RadioGroup name="question3" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q3-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q3-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q3-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>4.</strong> people who no longer need to get to the park
              by car
            </p>
            <RadioGroup name="question4" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q4-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q4-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q4-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>5.</strong> the route of the path
            </p>
            <RadioGroup name="question5" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q5-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q5-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q5-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>6.</strong> the length of the path
            </p>
            <RadioGroup name="question6" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q6-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q6-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q6-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>7.</strong> who paid for the path
            </p>
            <RadioGroup name="question7" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q7-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q7-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q7-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 8-14 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 8-14</h3>
        <p className="mb-2">
          <strong>
            Do the following statements agree with the information given in the
            text?
          </strong>
        </p>
        <p className="mb-2">In boxes 8-14 on your answer sheet, write</p>
        <div className="mb-4">
          <p className="mb-1">
            <strong>TRUE</strong> if the statement agrees with the information
          </p>
          <p className="mb-1">
            <strong>FALSE</strong> if the statement contradicts the information
          </p>
          <p className="mb-1">
            <strong>NOT GIVEN</strong> if there is no information on this
          </p>
        </div>

        <div className="space-y-6">
          <div className="question-item">
            <p className="mb-3">
              <strong>8.</strong> The college has introduced new courses since
              it opened.
            </p>
            <RadioGroup name="question8" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q8-true" value="TRUE" />
                <Label htmlFor="q8-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q8-false" value="FALSE" />
                <Label htmlFor="q8-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q8-ng" value="NOT GIVEN" />
                <Label htmlFor="q8-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>9.</strong> The college provides training for work in the
              film industry.
            </p>
            <RadioGroup name="question9" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q9-true" value="TRUE" />
                <Label htmlFor="q9-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q9-false" value="FALSE" />
                <Label htmlFor="q9-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q9-ng" value="NOT GIVEN" />
                <Label htmlFor="q9-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>10.</strong> Students have the chance to work with
              relevant professionals.
            </p>
            <RadioGroup name="question10" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q10-true" value="TRUE" />
                <Label htmlFor="q10-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q10-false" value="FALSE" />
                <Label htmlFor="q10-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q10-ng" value="NOT GIVEN" />
                <Label htmlFor="q10-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>11.</strong> Many more people apply to study at the
              college than are accepted.
            </p>
            <RadioGroup name="question11" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q11-true" value="TRUE" />
                <Label htmlFor="q11-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q11-false" value="FALSE" />
                <Label htmlFor="q11-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q11-ng" value="NOT GIVEN" />
                <Label htmlFor="q11-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>12.</strong> Theatre 500 was created by students.
            </p>
            <RadioGroup name="question12" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q12-true" value="TRUE" />
                <Label htmlFor="q12-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q12-false" value="FALSE" />
                <Label htmlFor="q12-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q12-ng" value="NOT GIVEN" />
                <Label htmlFor="q12-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>13.</strong> The new building and the council building
              were designed by the same architects.
            </p>
            <RadioGroup name="question13" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q13-true" value="TRUE" />
                <Label htmlFor="q13-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q13-false" value="FALSE" />
                <Label htmlFor="q13-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q13-ng" value="NOT GIVEN" />
                <Label htmlFor="q13-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>14.</strong> Local groups will be charged for using
              college premises.
            </p>
            <RadioGroup name="question14" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q14-true" value="TRUE" />
                <Label htmlFor="q14-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q14-false" value="FALSE" />
                <Label htmlFor="q14-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q14-ng" value="NOT GIVEN" />
                <Label htmlFor="q14-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">SECTION 2: Questions 15-27</h2>

      {/* Questions 15-20 */}
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
              <strong>15.</strong> Bringing a personal{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to work
              will make the place feel more homely.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>16.</strong> It is important to check the position of all{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> before
              use to avoid pulling any muscles.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>17.</strong> Leaving the office in the middle of the day
              may help to raise{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> later on.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>18.</strong> It is advisable to avoid checking a{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> during
              breaks.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>19.</strong> Getting involved in{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> at work
              may have negative results.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>20.</strong> Having a few{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> available
              can help people concentrate better at work.
            </p>
          </div>
        </div>
      </div>

      {/* Questions 21-27 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 21-27</h3>
        <p className="mb-2">Complete the notes below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 21-27 on your answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">
            Steps to take to achieve a promotion
          </h4>

          <p className="mb-2">
            – First step: examine past successes and any <strong>21.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> that would
            help gain promotion
          </p>

          <p className="mb-2">
            – Set up a meeting with your boss to talk about:
          </p>
          <p className="mb-2 ml-4">
            – how best to use your high level of <strong>22.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> in future
          </p>
          <p className="mb-2 ml-4">
            – or how much extra <strong>23.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> you already
            bring to the company
          </p>

          <p className="mb-2">
            – Focus on the important people in the company:
          </p>
          <p className="mb-2 ml-4">
            – find out which ones will be members of the <strong>24.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> who decide
            on the promotion
          </p>
          <p className="mb-2 ml-4">
            – consider how much they are aware of your <strong>25.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> for the
            future
          </p>

          <p className="mb-2">– Take steps to raise your profile by:</p>
          <p className="mb-2 ml-4">
            – offering to create a feature for a company publication
          </p>
          <p className="mb-2 ml-4">
            – participating in the <strong>26.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> of events
            for customers
          </p>

          <p className="mb-2">– Work on self-development:</p>
          <p className="mb-2 ml-4">
            – take any <strong>27.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> that fill
            in gaps in knowledge
          </p>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">SECTION 3: Questions 28-40</h2>

      {/* Questions 28-32 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 28-32</h3>
        <p className="mb-2">Complete the summary below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 28-32 on your answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">
            Complex social behaviour in wolf packs
          </h4>

          <p className="mb-4">
            Wolves live in packs and it is clear that there are a number of{" "}
            <strong>28.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> concerning
            their behaviour. Some observers believe they exhibit a sense of{" "}
            <strong>29.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. The
            stronger, more senior wolves seem to adopt the roles of the junior
            wolves when they are playing together. They act as if they are{" "}
            <strong>30.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> to the
            juniors and even permit some gentle <strong>31.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. What is
            even more surprising is that when one of the juniors gets too
            forceful, it bends down begging for <strong>32.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. Only when
            that has been granted will the wolves continue playing.
          </p>
        </div>
      </div>

      {/* Questions 33-37 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 33-37</h3>
        <p className="mb-2">
          Look at the following animals (Questions 33-37) and the list of
          descriptions below.
        </p>
        <p className="mb-4">
          Match each animal with the correct description, <strong>A-G</strong>.
        </p>

        <div className="mb-4 pl-5">
          <p className="mb-1">
            <strong>List of Descriptions</strong>
          </p>
          <p className="mb-1">
            <strong>A</strong> often attack peers who fail to follow the moral
            code
          </p>
          <p className="mb-1">
            <strong>B</strong> appear to enjoy playing with members of a
            different species
          </p>
          <p className="mb-1">
            <strong>C</strong> sometimes share treats with a peer
          </p>
          <p className="mb-1">
            <strong>D</strong> may assist a peer who is failing to complete a
            task
          </p>
          <p className="mb-1">
            <strong>E</strong> may be driven away by their peers if they do not
            obey the moral code
          </p>
          <p className="mb-1">
            <strong>F</strong> seem unwilling to benefit from something that
            hurts their peers
          </p>
          <p className="mb-1">
            <strong>G</strong> may help a different type of animal which is in
            difficulty
          </p>
        </div>

        <p className="mb-2">
          Write the correct letter, <strong>A-G</strong>, in boxes 33-37 on your
          answer sheet.
        </p>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>33.</strong> coyotes
            </p>
            <RadioGroup name="question33" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q33-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q33-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q33-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>34.</strong> domestic dogs
            </p>
            <RadioGroup name="question34" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q34-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q34-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q34-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>35.</strong> elephants
            </p>
            <RadioGroup name="question35" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q35-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q35-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q35-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>36.</strong> Diana monkeys
            </p>
            <RadioGroup name="question36" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q36-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q36-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q36-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>37.</strong> rats
            </p>
            <RadioGroup name="question37" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q37-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q37-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q37-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 38-40 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 38-40</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 38-40 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>38.</strong> What view is expressed by Professor de Waal?
            </p>
            <RadioGroup name="question38" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q38-a" value="A" />
                <Label htmlFor="q38-a" className="ml-2">
                  A Apes have advanced ideas about the difference between good
                  and evil.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q38-b" value="B" />
                <Label htmlFor="q38-b" className="ml-2">
                  B The social manners of some animals prove that they are
                  highly moral.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q38-c" value="C" />
                <Label htmlFor="q38-c" className="ml-2">
                  C Some human moral beliefs developed from our animal
                  ancestors.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q38-d" value="D" />
                <Label htmlFor="q38-d" className="ml-2">
                  D The desire to live in peace with others is a purely human
                  quality.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>39.</strong> Why does Professor Bekoff mention the
              experiment on Diana monkeys?
            </p>
            <RadioGroup name="question39" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q39-a" value="A" />
                <Label htmlFor="q39-a" className="ml-2">
                  A It shows that this species of monkey is not very easy to
                  train.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q39-b" value="B" />
                <Label htmlFor="q39-b" className="ml-2">
                  B It confirms his view on the value of research into certain
                  monkeys.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q39-c" value="C" />
                <Label htmlFor="q39-c" className="ml-2">
                  C It proves that female monkeys are generally less intelligent
                  than males.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q39-d" value="D" />
                <Label htmlFor="q39-d" className="ml-2">
                  D It illustrates a point he wants to make about monkeys and
                  other creatures.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>40.</strong> What does the writer find most surprising
              about chimpanzees?
            </p>
            <RadioGroup name="question40" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q40-a" value="A" />
                <Label htmlFor="q40-a" className="ml-2">
                  A They can suffer from some of the same illnesses as humans.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q40-b" value="B" />
                <Label htmlFor="q40-b" className="ml-2">
                  B They appear to treat disabled peers with consideration.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q40-c" value="C" />
                <Label htmlFor="q40-c" className="ml-2">
                  C They have sets of social conventions that they follow.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q40-d" value="D" />
                <Label htmlFor="q40-d" className="ml-2">
                  D The males can be quite destructive at times.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cambridge15GRTest4Questions;
