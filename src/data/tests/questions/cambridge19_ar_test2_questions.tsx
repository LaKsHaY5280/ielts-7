import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 19 Academic Reading Test 2
 */
export const Cambridge19ARTest2Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-7</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 1-7 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Britain's Industrial Revolution</h4>

            <h5 className="font-semibold mb-2">Steam power</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Newcomen's steam engine was used in mines to remove water.
              </li>
              <li>
                In Watt and Boulton's steam engine, the movement of the{" "}
                <strong>1</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> was
                linked to a gear system.
              </li>
              <li>
                A greater supply of <strong>2</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> was
                required to power steam engines.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">Textile industry</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Before the Industrial Revolution, spinners and weavers worked at
                home and in <strong>3</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </li>
              <li>
                Not as much <strong>4</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> was
                needed to produce cloth once the spinning jenny and power loom
                were invented.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">Iron industry</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Smelting of iron ore with coke resulted in material that was
                better <strong>5</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </li>
              <li>
                Demand for iron increased with the growth of the{" "}
                <strong>6</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">Communications</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Cooke and Wheatstone patented the first telegraphy system.
              </li>
              <li>
                The telegraphy system was used to prevent locomotives colliding.
              </li>
            </ul>

            <h5 className="font-semibold mb-2">Urbanisation</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>Small towns turned into cities very quickly.</li>
              <li>
                The new cities were dirty, crowded and lacked sufficient{" "}
                <strong>7</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </li>
            </ul>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 8-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 8-13 on your answer sheet, write</p>
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
                <strong>8</strong> Britain's canal network grew rapidly so that
                more goods could be transported around the country.
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
                <strong>9</strong> Costs in the iron industry rose when the
                technique of smelting iron ore with coke was introduced.
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
                <strong>10</strong> Samuel Morse's communication system was more
                reliable than that developed by William Cooke and Charles
                Wheatstone.
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

            <div className="question-item">
              <p className="mb-2">
                <strong>11</strong> The economic benefits of industrialisation
                were limited to certain sectors of society.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q11-true" />
                  <Label htmlFor="q11-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q11-false" />
                  <Label htmlFor="q11-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q11-ng" />
                  <Label htmlFor="q11-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>12</strong> Some skilled weavers believed that the
                introduction of the new textile machines would lead to job
                losses.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q12-true" />
                  <Label htmlFor="q12-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q12-false" />
                  <Label htmlFor="q12-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q12-ng" />
                  <Label htmlFor="q12-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>13</strong> There was some sympathy among local people
                for the Luddites who were arrested near Huddersfield.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q13-true" />
                  <Label htmlFor="q13-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q13-false" />
                  <Label htmlFor="q13-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q13-ng" />
                  <Label htmlFor="q13-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-18</h3>
          <p className="mb-2">Reading Passage 2 has six paragraphs, A-F.</p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, A-F, in boxes 14-18 on your answer sheet.
          </p>
          <p className="mb-2">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>14</strong> reference to two chemical compounds which
                impact on performance
              </p>
              <Input type="text" className="w-16" placeholder="A-F" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15</strong> examples of strategies for minimising the
                effects of stress
              </p>
              <Input type="text" className="w-16" placeholder="A-F" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16</strong> how a sportsperson accounted for their own
                experience of stress
              </p>
              <Input type="text" className="w-16" placeholder="A-F" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17</strong> study results indicating links between
                stress responses and performance
              </p>
              <Input type="text" className="w-16" placeholder="A-F" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18</strong> mention of people who can influence how
                athletes perceive their stress responses
              </p>
              <Input type="text" className="w-16" placeholder="A-F" />
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 19-22</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 19-22 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>19</strong> Performance stress involves many demands on
                the athlete, for example, coping with the possible risk of{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>20</strong> Cortisol can cause tennis players to produce
                fewer good{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>21</strong> Psychologists can help athletes to view
                their physiological responses as the effect of a positive
                feeling such as{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>22</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> is an
                example of a psychological technique which can reduce an
                athlete's stress responses.
              </p>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23 and 24</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 23 and 24 on your answer sheet.
          </p>
          <p className="mb-4">
            Which <strong>TWO</strong> facts about Emma Raducanu's withdrawal
            from the Wimbledon tournament are mentioned in the text?
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="q23-24-a" />
              <Label htmlFor="q23-24-a" className="flex-1">
                A the stage at which she dropped out of the tournament
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q23-24-b" />
              <Label htmlFor="q23-24-b" className="flex-1">
                B symptoms of her performance stress at the tournament
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q23-24-c" />
              <Label htmlFor="q23-24-c" className="flex-1">
                C measures which she had taken to manage her stress levels
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q23-24-d" />
              <Label htmlFor="q23-24-d" className="flex-1">
                D aspects of the Wimbledon tournament which increased her stress
                levels
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q23-24-e" />
              <Label htmlFor="q23-24-e" className="flex-1">
                E reactions to her social media posts about her experience at
                Wimbledon
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 25 and 26</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 25 and 26 on your answer sheet.
          </p>
          <p className="mb-4">
            Which <strong>TWO</strong> facts about anxiety are mentioned in{" "}
            <strong>Paragraph E</strong> of the text?
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="q25-26-a" />
              <Label htmlFor="q25-26-a" className="flex-1">
                A the factors which determine how severe it may be
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q25-26-b" />
              <Label htmlFor="q25-26-b" className="flex-1">
                B how long it takes for its effects to become apparent
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q25-26-c" />
              <Label htmlFor="q25-26-c" className="flex-1">
                C which of its symptoms is most frequently encountered
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q25-26-d" />
              <Label htmlFor="q25-26-d" className="flex-1">
                D the types of athletes who are most likely to suffer from it
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q25-26-e" />
              <Label htmlFor="q25-26-e" className="flex-1">
                E the harm that can result if athletes experience it too often
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-32</h3>
          <p className="mb-2">
            Complete the summary using the list of phrases, <strong>A-K</strong>
            , below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-K</strong>, in boxes 27-32 on
            your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Maryam Mirzakhani</h4>

            <p className="mb-4">
              Maryam Mirzakhani is regarded as <strong>27</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-K"
              />{" "}
              in the field of mathematics because she was the only female holder
              of the prestigious Fields Medal – a record that she retained at
              the time of her death. However, maths held little{" "}
              <strong>28</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-K"
              />{" "}
              for her as a child and in fact her performance was below average
              until she was <strong>29</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-K"
              />{" "}
              by a difficult puzzle that one of her siblings showed her.
            </p>

            <p className="mb-4">
              Later, as a professional mathematician, she had an inquiring mind
              and proved herself to be <strong>30</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-K"
              />{" "}
              when things did not go smoothly. She said she got the greatest{" "}
              <strong>31</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-K"
              />{" "}
              from making ground-breaking discoveries and in fact she was
              responsible for some extremely <strong>32</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-K"
              />{" "}
              mathematical studies.
            </p>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <strong>A</strong> appeal
              </div>
              <div>
                <strong>B</strong> determined
              </div>
              <div>
                <strong>C</strong> intrigued
              </div>
              <div>
                <strong>D</strong> single
              </div>
              <div>
                <strong>E</strong> achievement
              </div>
              <div>
                <strong>F</strong> devoted
              </div>
              <div>
                <strong>G</strong> involved
              </div>
              <div>
                <strong>H</strong> unique
              </div>
              <div>
                <strong>I</strong> innovative
              </div>
              <div>
                <strong>J</strong> satisfaction
              </div>
              <div>
                <strong>K</strong> intent
              </div>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 33-37</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 33-37 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>YES</strong> if the statement agrees with the claims of
              the writer
            </p>
            <p className="mb-1">
              <strong>NO</strong> if the statement contradicts the claims of the
              writer
            </p>
            <p className="mb-1">
              <strong>NOT GIVEN</strong> if it is impossible to say what the
              writer thinks about this
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>33</strong> Many people who ended up winning prestigious
                intellectual prizes only reached an average standard when young.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q33-yes" />
                  <Label htmlFor="q33-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q33-no" />
                  <Label htmlFor="q33-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q33-ng" />
                  <Label htmlFor="q33-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>34</strong> Einstein's failures as a young man were due
                to his lack of confidence.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q34-yes" />
                  <Label htmlFor="q34-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q34-no" />
                  <Label htmlFor="q34-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q34-ng" />
                  <Label htmlFor="q34-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>35</strong> It is difficult to reach agreement on
                whether some children are actually born gifted.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q35-yes" />
                  <Label htmlFor="q35-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q35-no" />
                  <Label htmlFor="q35-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q35-ng" />
                  <Label htmlFor="q35-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>36</strong> Einstein was upset by the public's view of
                his life's work.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q36-yes" />
                  <Label htmlFor="q36-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q36-no" />
                  <Label htmlFor="q36-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q36-ng" />
                  <Label htmlFor="q36-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>37</strong> Einstein put his success down to the speed
                at which he dealt with scientific questions.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q37-yes" />
                  <Label htmlFor="q37-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q37-no" />
                  <Label htmlFor="q37-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q37-ng" />
                  <Label htmlFor="q37-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 38-40</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 38-40 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>38</strong> What does Eyre believe is needed for
                children to equal 'gifted' standards?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q38-a" className="mt-1" />
                  <Label htmlFor="q38-a" className="flex-1">
                    A strict discipline from the teaching staff
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q38-b" className="mt-1" />
                  <Label htmlFor="q38-b" className="flex-1">
                    B assistance from their peers in the classroom
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q38-c" className="mt-1" />
                  <Label htmlFor="q38-c" className="flex-1">
                    C the development of a spirit of inquiry towards their
                    studies
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q38-d" className="mt-1" />
                  <Label htmlFor="q38-d" className="flex-1">
                    D the determination to surpass everyone else's achievements
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>39</strong> What is the result of Ericsson's research?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q39-a" className="mt-1" />
                  <Label htmlFor="q39-a" className="flex-1">
                    A Very gifted students do not need to work on improving
                    memory skills.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q39-b" className="mt-1" />
                  <Label htmlFor="q39-b" className="flex-1">
                    B Being born with a special gift is not the key factor in
                    becoming expert.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q39-c" className="mt-1" />
                  <Label htmlFor="q39-c" className="flex-1">
                    C Including time for physical exercise is crucial in raising
                    performance.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q39-d" className="mt-1" />
                  <Label htmlFor="q39-d" className="flex-1">
                    D 10,000 hours of relevant and demanding work will create a
                    genius.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>40</strong> In the penultimate paragraph, it is stated
                the key to some deprived children's success is
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q40-a" className="mt-1" />
                  <Label htmlFor="q40-a" className="flex-1">
                    A a regular and nourishing diet at home.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q40-b" className="mt-1" />
                  <Label htmlFor="q40-b" className="flex-1">
                    B the loving support of more than one parent.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q40-c" className="mt-1" />
                  <Label htmlFor="q40-c" className="flex-1">
                    C a community which has well-funded facilities for learning.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q40-d" className="mt-1" />
                  <Label htmlFor="q40-d" className="flex-1">
                    D the guidance of someone who recognises the benefits of
                    learning.
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
