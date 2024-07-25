import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Radio,
  Select,
  Option,
  Rating,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

//import * as Nei from '../../Sample';

// console.log(Nei.persons);

const radioData = [
  { value: 'news', color: 'red', label: 'News' },
  { value: 'travel', color: 'green', label: 'Travel' },
];
const checkBoxData = [
  { color: 'red', value: 'red', label: 'Red' },
  { color: 'blue', value: 'blue', label: 'Blue' },
  { color: 'green', value: 'green', label: 'Green' },
];




const AddForm = () => {

  const blogSchema = Yup.object({
    title: Yup.string().min(5).max(100).required(),
    author: Yup.string().required(),
    blogType: Yup.string().required(),
    someEx: Yup.array().min(1).required(),
    country: Yup.string().required(),
    rating: Yup.number().required(),
    description: Yup.string().min(10).max(200).required()
  });
  const { handleChange, handleSubmit, values, errors, setFieldValue, touched } = useFormik({
    initialValues: {
      title: '',
      author: '',
      blogType: '',
      someEx: [],
      country: '',
      rating: 0,
      description: ''
    },
    onSubmit: (val, { resetForm }) => {
      console.log(val);
    },
    validationSchema: blogSchema
  });

  return (
    <div className='p-7  max-w-lg'>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add Blog
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter Blog details
        </Typography>

        <form onSubmit={handleSubmit} className="mt-7 mb-2 ">
          <div className="mb-1 flex flex-col gap-6">

            <div>
              <Input
                name='title'
                onChange={handleChange}
                value={values.title}
                size="lg"
                label='Blog Title'
              />
              {errors.title && touched.title && <h1 className='text-red-600'>{errors.title}</h1>}
            </div>

            <div>
              <Input
                size="lg"
                name='author'
                onChange={handleChange}
                value={values.author}
                label='Author'
              />
              {/* <h1 className='text-red-600'>{errors.author}</h1> */}
            </div>




            <div className="type">
              <Typography>Blog Type</Typography>

              <div className="flex gap-10">

                {radioData.map((rad, i) => {
                  return <Radio
                    key={i}
                    color={rad.color}
                    name='blogType'
                    onChange={handleChange}
                    value={rad.value}
                    label={rad.label}
                  />;
                })}


              </div>
            </div>

            <div className="ch">
              <Typography>Some Example</Typography>
              <div className="flex w-max gap-4">
                {checkBoxData.map((check, i) => {
                  return <Checkbox
                    key={i}
                    name='someEx'
                    onChange={handleChange}
                    color={check.color}
                    value={check.value}
                    label={check.label} />
                })}

              </div>
            </div>


            <div className="w-72">
              <Select onChange={(e) => setFieldValue('country', e)} label="Select Country">
                <Option value='nepal'>Nepal</Option>
                <Option value='india'>India</Option>
                <Option value='china'>China</Option>

              </Select>
            </div>

            <div>
              <Typography>Rating</Typography>
              <Rating onChange={(e) => setFieldValue('rating', e)} />
            </div>

            <div>
              <Textarea
                name='description'
                value={values.description}
                onChange={handleChange}
                label="Description" />
            </div>

            {/* <div>
              <Input type='file' label='select image' />
            </div> */}



          </div>

          <Button type='submit' className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </Card>
    </div>
  )
}

export default AddForm