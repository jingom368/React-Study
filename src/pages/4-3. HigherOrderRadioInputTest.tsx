import {ChangeEvent, useCallback, useMemo, useState} from 'react'
import {Title, Subtitle} from '../components'
import * as D from '../data'
import {Input} from '../theme/daisyui'

export default function HigherOrderRadioInputTest() {
    const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), [])
    // const [SelectedJobtitle, setSelectedJobtitle] = useState<string>(jobTitles[0])
    // const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    //     setSelectedJobtitle(notUsed => e.target.value)
    // }, [])
    const [SelectedIndex, setSelectedIndex] = useState<number>(0)
    const onChange = useCallback(
        (index: number) => () => setSelectedIndex(notUsed => index),
        []
    )

    const radioInputs = useMemo(
        () =>
            jobTitles.map((value, index) => (
                <label key={index} className="flex justify-start cursor-pointer label">
                    <Input
                        type="radio"
                        name="higher jobs"
                        className="mr-4 radio radio-primary"
                        // checked={value === SelectedJobtitle}
                        checked={index === SelectedIndex}
                        defaultValue={value}
                        // onChange={onChange}
                        onChange={onChange(index)}
                    />
                    <span className="label-text">{value}</span>
                </label>
            )),
        // [jobTitles, SelectedJobtitle, onChange]
        [jobTitles, SelectedIndex, onChange]
    )

    return (
        <section className="mt-4">
            <Title>RadioInputTest</Title>
            <div className="flex flex-col justify-center mt-4">
                <Subtitle>What is your jobs?</Subtitle>
                <Subtitle className="mt-4">
                    Selected Job: {jobTitles[SelectedIndex]}
                </Subtitle>
                <div className="flex justify-center p-4 mt-4">
                    <div className="flex flex-col mt-4">{radioInputs}</div>
                </div>
            </div>
        </section>
    )
}
