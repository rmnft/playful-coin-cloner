
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface TokenSupplyInfoProps {
  data: {
    decimals: number;
    totalSupply: number;
    description: string;
  };
  onComplete: (data: {
    decimals: number;
    totalSupply: number;
    description: string;
  }) => void;
  onBack: () => void;
}

export const TokenSupplyInfo: React.FC<TokenSupplyInfoProps> = ({
  data,
  onComplete,
  onBack,
}) => {
  const [decimals, setDecimals] = React.useState(data.decimals);
  const [totalSupply, setTotalSupply] = React.useState(data.totalSupply);
  const [description, setDescription] = React.useState(data.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({ decimals, totalSupply, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="decimals">Decimals</Label>
        <Input
          id="decimals"
          type="number"
          value={decimals}
          onChange={(e) => setDecimals(Number(e.target.value))}
          required
          min={0}
          max={18}
          disabled
        />
        <p className="text-sm text-gray-500">Fixed at 9 decimals</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="totalSupply">Total Supply</Label>
        <Input
          id="totalSupply"
          type="number"
          value={totalSupply}
          onChange={(e) => setTotalSupply(Number(e.target.value))}
          required
          min={1}
          disabled
        />
        <p className="text-sm text-gray-500">Fixed at 1 billion tokens</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your token's description"
          className="h-32"
        />
      </div>

      <div className="flex gap-4">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" className="flex-1">
          Next Step
        </Button>
      </div>
    </form>
  );
};
