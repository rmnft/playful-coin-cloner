import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface TokenSupplyInfoProps {
  formData: {
    decimals: number;
    totalSupply: number;
    description: string;
    [key: string]: any;
  };
  setFormData: (data: any) => void;
  onComplete: (data: {
    decimals: number;
    totalSupply: number;
    description: string;
  }) => void;
  onBack: () => void;
}

export const TokenSupplyInfo: React.FC<TokenSupplyInfoProps> = ({
  formData,
  setFormData,
  onComplete,
  onBack,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({ decimals: formData.decimals, totalSupply: formData.totalSupply, description: formData.description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="decimals">Token Decimals</Label>
        <Input
          id="decimals"
          type="number"
          min={0}
          max={18}
          value={formData.decimals}
          onChange={(e) => setFormData({ ...formData, decimals: parseInt(e.target.value) })}
        />
        <p className="text-sm text-gray-500">
          Number of decimal places (0-18). Common values: 9 for most tokens, 6 for stablecoins
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="totalSupply">Total Supply</Label>
        <Input
          id="totalSupply"
          type="number"
          min={1}
          value={formData.totalSupply}
          onChange={(e) => setFormData({ ...formData, totalSupply: parseInt(e.target.value) })}
        />
        <p className="text-sm text-gray-500">
          The total number of tokens to create
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Token Description</Label>
        <Textarea
          id="description"
          placeholder="Describe your token's purpose and features..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
