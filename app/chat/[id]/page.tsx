"use client";

import { AIConversationLayout } from "@/app/_components/AIConversationLayout";
import { useEffect, useState } from "react";

const App = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<string>();

  useEffect(() => {
    /**
     * 初期化メソッド
     */
    const func = async () => {
      const { id } = await params;
      setId(id);
    };
    func();
  }, []);

  
  return <AIConversationLayout id={id} key={id} />;
}

export default App;
