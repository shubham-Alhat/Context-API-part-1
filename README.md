# Context API in React.

## 1. Know why this concept EXIST...

So, Imagine we want to pass a prop(data) to a component which is present deep inside other components. In such case, we have to pass a prop to each component until we reach our target component.

below diagram is suitable to understand what the above content says.

**_ParentComponent  
 |  
IntermediateComponent1  
 |  
IntermediateComponent2  
 |  
TargetComponent (needs the prop)_**

In this scenario, the **TargetComponent** needs the data, but the **IntermediateComponent1** and **IntermediateComponent2** unnecessarily receive and pass the prop.

So, you have to pass the prop through every intermediate component, even if those components don't need it.

This process is called prop drilling and can make your code harder to manage and understand.

Context API solves this issue by providing prop directly to component which needs it.

## 2. How to

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1650639220464/AGeHeuV2S.png?auto=compress,format&format=webp)
