import { createRealmContext } from '@realm/react';
import Task from './Task';

const TaskRealmContext = createRealmContext({
  schema: [Task],
});

export default TaskRealmContext;
