'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { toast } from 'sonner';
import React, { useCallback, useState } from 'react';

export default function CreateDocumentButton() {
  const router = useRouter();
  const createDocument = useMutation(api.documents.createDocument);
  const [loading, setLoading] = useState(false);

  const onCreate = useCallback(() => {
    if (loading) return;
    setLoading(true);
    const promise = createDocument({ title: 'Untitled' })
      .then((documentId) => {
        router.push(`/documents/${documentId}`);
      })
      .finally(() => setLoading(false));

    toast.promise(promise, {
      loading: 'Creating document...',
      success: 'Document created!',
      error: 'Error creating document',
    });
  }, [createDocument, router, loading]);

  return (
    <Button onClick={onCreate} disabled={loading}>
      <PlusCircle className="w-4 h-4 mr-2" />
      {loading ? 'Creating...' : 'Create a Note'}
    </Button>
  );
}
