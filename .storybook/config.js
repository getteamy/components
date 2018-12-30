import { configure } from '@storybook/react'
import 'material-design-icons/iconfont/material-icons.css'

import './global.css'

const req = require.context('../src', true, /stories\.tsx$/)
const loadStories = () => req.keys().forEach(req)

configure(loadStories, module)