import NativeRequestTest from './NativeRequest.test'
import TaroHybridManagerTest from './TaroHybridManager.test'
import localUnitTest from './LocalUnit.test';

export default function testsuite() {
  localUnitTest();
  TaroHybridManagerTest()
  NativeRequestTest()
}