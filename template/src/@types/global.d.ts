import {StackParamsList} from '@/navigators/Stacks/types';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- overwrite the default type
    interface RootParamList extends StackParamsList {}
  }
}
