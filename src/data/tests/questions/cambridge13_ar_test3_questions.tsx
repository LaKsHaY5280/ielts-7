// Cambridge 13 Academic Reading Test 3 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 13 Academic Reading Test 3
 */
export const Cambridge13ARTest3Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-8</h3>
          <p className="mb-2">Complete the table below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 1-8 on your answer sheet.
          </p>

          <div className="mb-6">
            <table className="border-collapse border border-gray-300 w-full">
              <thead>
                <tr>
                  <th colSpan={3} className="border border-gray-300 p-2">
                    <h4 className="font-bold">THE COCONUT PALM</h4>
                  </th>
                </tr>
                <tr>
                  <th className="border border-gray-300 p-2 w-1/6">
                    <strong>Part</strong>
                  </th>
                  <th className="border border-gray-300 p-2 w-1/3">
                    <strong>Description</strong>
                  </th>
                  <th className="border border-gray-300 p-2 w-1/2">
                    <strong>Uses</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">
                    <strong>trunk</strong>
                  </td>
                  <td className="border border-gray-300 p-2">
                    up to 30 metres
                  </td>
                  <td className="border border-gray-300 p-2">
                    timber for houses and the making of <strong>1.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    <strong>leaves</strong>
                  </td>
                  <td className="border border-gray-300 p-2">
                    up to 6 metres long
                  </td>
                  <td className="border border-gray-300 p-2">
                    to make brushes
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    <strong>flowers</strong>
                  </td>
                  <td className="border border-gray-300 p-2">
                    at the top of the trunk
                  </td>
                  <td className="border border-gray-300 p-2">
                    stems provide sap, used as a drink or a source of{" "}
                    <strong>2.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </td>
                </tr>
                <tr>
                  <td rowSpan={5} className="border border-gray-300 p-2">
                    <strong>fruits</strong>
                  </td>
                  <td className="border border-gray-300 p-2">outer layer</td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    middle layer (coir fibres)
                  </td>
                  <td className="border border-gray-300 p-2">
                    used for <strong>3.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Inner layer (shell)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <p>
                      a source of <strong>4.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                    <p>
                      (when halved) for <strong>5.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">coconut water</td>
                  <td className="border border-gray-300 p-2">
                    <p>a drink</p>
                    <p>
                      a source of <strong>6.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                      for other plants
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">coconut flesh</td>
                  <td className="border border-gray-300 p-2">
                    <p>
                      oil and milk for cooking and <strong>7.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                    <p>
                      glycerine (an ingredient in <strong>8.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />)
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 9-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 9-13 on your answer sheet, write</p>
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

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>9.</strong> Coconut seeds need shade in order to
                germinate.
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
                <strong>10.</strong> Coconuts were probably transported to Asia
                from America in the 16<sup>th</sup> century.
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
                <strong>11.</strong> Coconuts found on the west coast of America
                were a different type from those found on the east coast.
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
                <strong>12.</strong> All the coconuts found in Asia are
                cultivated varieties.
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
                <strong>13.</strong> Coconuts are cultivated in different ways
                in America and the Pacific.
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
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-17</h3>
          <p className="mb-2">
            Look at the following ideas (Questions <strong>14-17</strong>) and
            the list of researchers below.
          </p>
          <p className="mb-2">
            Match each idea with the correct researcher, <strong>A</strong>,{" "}
            <strong>B</strong> or <strong>C</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A</strong>, <strong>B</strong> or{" "}
            <strong>C</strong>, in boxes 14-17 on your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="mb-4">
            <h4 className="font-bold">List of Researchers</h4>
            <p>
              <strong>A</strong> Mark VanDam
            </p>
            <p>
              <strong>B</strong> Nairán Ramirez-Esparza
            </p>
            <p>
              <strong>C</strong> Patricia Kuhl
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> the importance of adults giving babies
                individual attention when talking to them
              </p>
              <RadioGroup name="question14" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q14-a" value="A" />
                  <Label htmlFor="q14-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q14-b" value="B" />
                  <Label htmlFor="q14-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q14-c" value="C" />
                  <Label htmlFor="q14-c" className="ml-2">
                    C
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>15.</strong> the connection between what babies hear and
                their own efforts to create speech
              </p>
              <RadioGroup name="question15" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q15-a" value="A" />
                  <Label htmlFor="q15-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q15-b" value="B" />
                  <Label htmlFor="q15-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q15-c" value="C" />
                  <Label htmlFor="q15-c" className="ml-2">
                    C
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>16.</strong> the advantage for the baby of having two
                parents each speaking in a different way
              </p>
              <RadioGroup name="question16" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q16-a" value="A" />
                  <Label htmlFor="q16-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q16-b" value="B" />
                  <Label htmlFor="q16-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q16-c" value="C" />
                  <Label htmlFor="q16-c" className="ml-2">
                    C
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>17.</strong> the connection between the amount of baby
                talk babies hear and how much vocalising they do themselves
              </p>
              <RadioGroup name="question17" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q17-a" value="A" />
                  <Label htmlFor="q17-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q17-b" value="B" />
                  <Label htmlFor="q17-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q17-c" value="C" />
                  <Label htmlFor="q17-c" className="ml-2">
                    C
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 18-23</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
            each answer.
          </p>
          <p className="mb-4">
            <em>
              Write your answers in boxes <strong>18-23</strong> on your answer
              sheet.
            </em>
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              Research into how parents talk to babies
            </h4>
            <p className="mb-4">
              Researchers at Washington State University used{" "}
              <strong>18.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, together
              with specialised computer programs, to analyse how parents
              interacted with their babies during a normal day. The study
              revealed that <strong>19.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> tended
              not to modify their ordinary speech patterns when interacting with
              their babies. According to an idea known as the{" "}
              <strong>20.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, they may
              use a more adult type of speech to prepare infants for the
              language they will hear outside the family home. According to the
              researchers, hearing baby talk from one parent and 'normal'
              language from the other expands the baby's <strong>21.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of types
              of speech which they can practise.
            </p>
            <p className="mb-4">
              Meanwhile, another study carried out by scientists from the
              University of Washington and the University of Connecticut
              recorded speech and sound using special <strong>22.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> that the
              babies were equipped with. When they studied the babies again at
              age two, the found that those who had heard a lot of baby talk in
              infancy had a much larger <strong>23.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> than
              those who had not.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 24-26</h3>
          <p className="mb-2">
            Reading Passage 2 has six paragraphs, <strong>A-F</strong>.
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-F</strong>, in boxes 24-26 on
            your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>24.</strong> a reference to a change which occurs in
                babies' brain activity before the end of their first year
              </p>
              <RadioGroup name="question24" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q24-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q24-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q24-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>25.</strong> an example of what some parents do for
                their baby's benefit before birth
              </p>
              <RadioGroup name="question25" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q25-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q25-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q25-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>26.</strong> a mention of babies' preference for the
                sounds that other babies make
              </p>
              <RadioGroup name="question26" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q26-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q26-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q26-${letter.toLowerCase()}`}
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

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-31</h3>
          <p className="mb-2">
            Reading Passage 3 has eight paragraphs, <strong>A-H</strong>.
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-H</strong>, in boxes 27-31 on
            your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>27.</strong> proposed explanations for the decline of
                the Harappan Civilisation
              </p>
              <RadioGroup name="question27" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q27-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q27-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q27-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>28.</strong> reference to a present-day application of
                some archaeological research findings
              </p>
              <RadioGroup name="question28" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q28-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q28-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q28-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29.</strong> a difference between the Harappan
                Civilisation and another culture of the same period
              </p>
              <RadioGroup name="question29" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q29-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q29-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q29-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30.</strong> a description of some features of Harappan
                urban design
              </p>
              <RadioGroup name="question30" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q30-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q30-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q30-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31.</strong> reference to the discovery of errors made
                by previous archaeologists
              </p>
              <RadioGroup name="question31" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q31-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q31-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q31-${letter.toLowerCase()}`}
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

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-36</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 32-36 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              Looking at evidence of climate change
            </h4>
            <p className="mb-4">
              Yama Dixit and David Hodell have found the first definitive
              evidence of climate change affecting the plains of north-western
              India thousands of years ago. By collecting the{" "}
              <strong>32.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of snails
              and analysing them, they discovered evidence of a change in water
              levels in a <strong>33.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in the
              region. This occurred when there was less <strong>34.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> than
              evaporation, and suggests that there was an extended period of
              drought. Petrie and Singh's team are using archaeological records
              to look at <strong>35.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> from five
              millennia ago, in order to know whether people had adapted their
              agricultural practices to changing climatic conditions. They are
              also examining objects including <strong>36.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, so as to
              find out about links between inhabitants of different parts of the
              region and whether these changed over time.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37-40</h3>
          <p className="mb-2">
            Look at the following statements (Questions <strong>37-40</strong>)
            and the list of researchers below.
          </p>
          <p className="mb-2">
            Match each statement with the correct researcher, <strong>A</strong>
            , <strong>B</strong>, <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>, in boxes 37-40 on your
            answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="mb-4">
            <h4 className="font-bold">List of Researchers</h4>
            <p>
              <strong>A</strong> Cameron Petrie
            </p>
            <p>
              <strong>B</strong> Ravindanath Singh
            </p>
            <p>
              <strong>C</strong> Yama Dixit
            </p>
            <p>
              <strong>D</strong> David Hodell
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>37.</strong> Finding further information about changes
                to environmental conditions in the region is vital.
              </p>
              <RadioGroup name="question37" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q37-a" value="A" />
                  <Label htmlFor="q37-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-b" value="B" />
                  <Label htmlFor="q37-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-c" value="C" />
                  <Label htmlFor="q37-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-d" value="D" />
                  <Label htmlFor="q37-d" className="ml-2">
                    D
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>38.</strong> Examining previous patterns of behaviour
                may have long-term benefits.
              </p>
              <RadioGroup name="question38" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q38-a" value="A" />
                  <Label htmlFor="q38-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-b" value="B" />
                  <Label htmlFor="q38-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-c" value="C" />
                  <Label htmlFor="q38-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-d" value="D" />
                  <Label htmlFor="q38-d" className="ml-2">
                    D
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>39.</strong> Rough calculations indicate the approximate
                length of a period of water shortage.
              </p>
              <RadioGroup name="question39" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q39-a" value="A" />
                  <Label htmlFor="q39-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-b" value="B" />
                  <Label htmlFor="q39-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-c" value="C" />
                  <Label htmlFor="q39-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-d" value="D" />
                  <Label htmlFor="q39-d" className="ml-2">
                    D
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>40.</strong> Information about the decline of the
                Harappan Civilisation has been lacking.
              </p>
              <RadioGroup name="question40" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q40-a" value="A" />
                  <Label htmlFor="q40-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-b" value="B" />
                  <Label htmlFor="q40-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-c" value="C" />
                  <Label htmlFor="q40-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-d" value="D" />
                  <Label htmlFor="q40-d" className="ml-2">
                    D
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

// export { Cambridge13ARTest3Questions };
export default Cambridge13ARTest3Questions;
