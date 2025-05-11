import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 19 Academic Reading Test 4
 */
export const Cambridge19ARTest4Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-6</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 1-6 on your answer sheet, write</p>
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
                <strong>1</strong> Forty years ago, there were fewer butterflies
                in Britain than at present.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q1-true" />
                  <Label htmlFor="q1-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q1-false" />
                  <Label htmlFor="q1-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q1-ng" />
                  <Label htmlFor="q1-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>2</strong> Caterpillars are eaten by a number of
                different predators.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q2-true" />
                  <Label htmlFor="q2-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q2-false" />
                  <Label htmlFor="q2-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q2-ng" />
                  <Label htmlFor="q2-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>3</strong> 'Phenology' is a term used to describe a
                creature's ability to alter the location of a lifecycle event.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q3-true" />
                  <Label htmlFor="q3-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q3-false" />
                  <Label htmlFor="q3-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q3-ng" />
                  <Label htmlFor="q3-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>4</strong> Some species of butterfly have a reduced
                lifespan due to spring temperature increases.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q4-true" />
                  <Label htmlFor="q4-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q4-false" />
                  <Label htmlFor="q4-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q4-ng" />
                  <Label htmlFor="q4-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>5</strong> There is a clear reason for the adaptations
                that butterflies are making to climate change.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q5-true" />
                  <Label htmlFor="q5-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q5-false" />
                  <Label htmlFor="q5-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q5-ng" />
                  <Label htmlFor="q5-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>6</strong> The data used in the study was taken from the
                work of amateur butterfly watchers.
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 7-13</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 7-13 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Butterflies in the UK</h4>

            <h5 className="font-semibold mb-2">The Small Blue</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                lives in large <strong>7</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>
                first appears at the start of <strong>8</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>completes more than one reproductive cycle per year</li>
            </ul>

            <h5 className="font-semibold mb-2">The High Brown Fritillary</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>has one reproductive cycle</li>
              <li>
                is considered to be more <strong>9</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> than
                other species
              </li>
              <li>
                its caterpillars occupy a limited range of <strong>10</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
            </ul>

            <h5 className="font-semibold mb-2">The Silver-studded Blue</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                is already able to reproduce twice a year in warm areas of{" "}
                <strong>11</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
            </ul>

            <h5 className="font-semibold mb-2">The White Admiral</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                is found in <strong>12</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> areas
                of England
              </li>
              <li>
                both climate change and the <strong>13</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> of the
                caterpillar are possible reasons for decline
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-17</h3>
          <p className="mb-2">Reading Passage 2 has six paragraphs, A-F.</p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, A-F, in boxes 14-17 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>14</strong> reference to the rapidly increasing need for
                one raw material in the transport industry
              </p>
              <Input type="text" className="w-16" placeholder="A-F" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15</strong> a rough estimate of the area of the Earth
                covered by the oceans
              </p>
              <Input type="text" className="w-16" placeholder="A-F" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16</strong> how a particular underwater habitat, where
                minerals and organisms co-exist, is formed
              </p>
              <Input type="text" className="w-16" placeholder="A-F" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17</strong> reference to the fact that the countries of
                the world have yet to agree on rules for the exploration of the
                seabed
              </p>
              <Input type="text" className="w-16" placeholder="A-F" />
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 18-23</h3>
          <p className="mb-2">
            Look at the following statements (Questions 18-23) and the list of
            people below.
          </p>
          <p className="mb-2">
            Match each statement with the correct person or people, A-E.
          </p>
          <p className="mb-4">
            Write the correct letter, A-E, in boxes 18-23 on your answer sheet.
          </p>
          <p className="mb-2">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">List of People</h4>
            <p className="mb-1">
              <strong>A</strong> Professor Mat Upton
            </p>
            <p className="mb-1">
              <strong>B</strong> Julie Hunter, Julian Aguon and Pradeep Singh
            </p>
            <p className="mb-1">
              <strong>C</strong> Dr Jon Copley
            </p>
            <p className="mb-1">
              <strong>D</strong> Mike Johnston
            </p>
            <p className="mb-1">
              <strong>E</strong> Verena Tunnicliffe
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>18</strong> A move away from the exploration of heavily
                mined reserves on land is a good idea.
              </p>
              <Input type="text" className="w-16" placeholder="A-E" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19</strong> The negative effects of undersea exploration
                on local areas and their inhabitants are being ignored.
              </p>
              <Input type="text" className="w-16" placeholder="A-E" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>20</strong> There are more worthwhile things to extract
                from the sea than minerals.
              </p>
              <Input type="text" className="w-16" placeholder="A-E" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>21</strong> No other form of human exploration will have
                such a destructive impact on marine life as deep-sea mining.
              </p>
              <Input type="text" className="w-16" placeholder="A-E" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>22</strong> More is known about outer space than about
                what lies beneath the oceans.
              </p>
              <Input type="text" className="w-16" placeholder="A-E" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>23</strong> There is one marine life habitat where
                experts agree mining should not take place.
              </p>
              <Input type="text" className="w-16" placeholder="A-E" />
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 24-26</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 24-26 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Mining the sea floor</h4>

            <p className="mb-4 text-justify">
              Mining corporations believe that the mineral resources lying under
              the sea may be superior to those found in the earth. They also say
              that these can be removed without producing much{" "}
              <strong>24</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>

            <p className="mb-4 text-justify">
              The extraction is often done by adapting the <strong>25</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> that has
              already been used to work on land. The method of excavation
              involves removing the seawater from the slurry that is brought up
              to ships and returning it to the seabed. However, concerned groups
              strongly believe that <strong>26</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> is
              necessary due to the possible number of unidentified consequences.
            </p>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-30</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 27-30 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>27</strong> What is the writer doing in the first
                paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q27-a" className="mt-1" />
                  <Label htmlFor="q27-a" className="flex-1">
                    A setting out two opposing views about human nature
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q27-b" className="mt-1" />
                  <Label htmlFor="q27-b" className="flex-1">
                    B justifying his opinion about our tendency to be greedy
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q27-c" className="mt-1" />
                  <Label htmlFor="q27-c" className="flex-1">
                    C describing a commonly held belief about people's behaviour
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q27-d" className="mt-1" />
                  <Label htmlFor="q27-d" className="flex-1">
                    D explaining why he thinks that humans act in a selfish
                    manner
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> What point is made about Richard Dawkins'
                book The Selfish Gene?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q28-a" className="mt-1" />
                  <Label htmlFor="q28-a" className="flex-1">
                    A Its appeal lay in the radical nature of its ideas.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q28-b" className="mt-1" />
                  <Label htmlFor="q28-b" className="flex-1">
                    B Its success was due to the scientific support it offered.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q28-c" className="mt-1" />
                  <Label htmlFor="q28-c" className="flex-1">
                    C It presented a view that was in line with the attitudes of
                    its time.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q28-d" className="mt-1" />
                  <Label htmlFor="q28-d" className="flex-1">
                    D It took an innovative approach to the analysis of human
                    psychology.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> What does the writer suggest about the
                prehistoric era in the fourth paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q29-a" className="mt-1" />
                  <Label htmlFor="q29-a" className="flex-1">
                    A Societies were more complex than many people believe.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q29-b" className="mt-1" />
                  <Label htmlFor="q29-b" className="flex-1">
                    B Supplies of natural resources were probably relatively
                    plentiful.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q29-c" className="mt-1" />
                  <Label htmlFor="q29-c" className="flex-1">
                    C Most estimates about population sizes are likely to be
                    inaccurate.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q29-d" className="mt-1" />
                  <Label htmlFor="q29-d" className="flex-1">
                    D Humans moved across continents more than was previously
                    thought.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> The writer refers to Bruce Knauft's work as
                support for the idea that
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q30-a" className="mt-1" />
                  <Label htmlFor="q30-a" className="flex-1">
                    A selfishness is a relatively recent development in human
                    societies.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q30-b" className="mt-1" />
                  <Label htmlFor="q30-b" className="flex-1">
                    B only people in isolated communities can live in an
                    unselfish manner.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q30-c" className="mt-1" />
                  <Label htmlFor="q30-c" className="flex-1">
                    C very few lifestyles have survived unchanged since
                    prehistoric times.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q30-d" className="mt-1" />
                  <Label htmlFor="q30-d" className="flex-1">
                    D hunter-gatherer cultures worldwide are declining in
                    number.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 31-35</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 31-35 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">
              Contemporary hunter-gatherer societies
            </h4>

            <p className="mb-4 text-justify">
              Bruce Knauft's research shows that contemporary hunter-gatherer
              societies tend to exhibit a high level of <strong>31</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in all
              areas of life. In these cultures, distributing resources fairly
              among all members is a moral obligation. These societies also
              employ strategies to prevent differences in <strong>32</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              occurring: for example, the !Kung follow a custom whereby the
              credit for one person's success at <strong>33</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> is given
              to another member of the group. Individuals who behave in a{" "}
              <strong>34</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> manner
              are punished by being excluded from the group, and women have a
              considerable amount of <strong>35</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in
              choices regarding work and marriage.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 36-40</h3>
          <p className="mb-2">
            Do the following statements agree with the views of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 36-40 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>YES</strong> if the statement agrees with the views of the
              writer
            </p>
            <p className="mb-1">
              <strong>NO</strong> if the statement contradicts the views of the
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
                <strong>36</strong> Some anthropologists are mistaken about the
                point when the number of societies such as the !Kung began to
                decline.
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
                <strong>37</strong> Humans who developed warlike traits in
                prehistory would have had an advantage over those who did not.
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

            <div className="question-item">
              <p className="mb-2">
                <strong>38</strong> Being peaceful and cooperative is a natural
                way for people to behave.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q38-yes" />
                  <Label htmlFor="q38-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q38-no" />
                  <Label htmlFor="q38-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q38-ng" />
                  <Label htmlFor="q38-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>39</strong> Negative traits are more apparent in some
                modern cultures than in others.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q39-yes" />
                  <Label htmlFor="q39-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q39-no" />
                  <Label htmlFor="q39-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q39-ng" />
                  <Label htmlFor="q39-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>40</strong> Animal research has failed to reveal a link
                between changes in the environment and the emergence of
                aggressive tendencies.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q40-yes" />
                  <Label htmlFor="q40-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q40-no" />
                  <Label htmlFor="q40-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q40-ng" />
                  <Label htmlFor="q40-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
